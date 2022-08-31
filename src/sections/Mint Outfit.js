import { useState } from "react";
import axios from "axios";
import { p } from "./preview.js";

import abi from "../Components/abi.json";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MintOutfit = () => {
  const REACT_APP_CONTRACT_ADDRESS =
    "0x2846573b8b87a034Fc1b42466367400b9F51A83a";
  const SELECTEDNETWORK = "4";
  const SELECTEDNETWORKNAME = "Ethereum";

  const [preview, setPreview] = useState(p);
  const [loading, setloading] = useState(false);

  let ct, web3;

  const loadimage = async (e) => {
    setloading(true);

    axios
      .get(
        "https://worldofoutfits.com/bodies/" +
          (e.target.value < 10000 ? "unnamed-" : "") +
          e.target.value +
          ".png",
        { responseType: "arraybuffer" }
      )
      .then((res) => {
        const base64 = btoa(
          new Uint8Array(res.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        setPreview(base64);
        setloading(false);
      });
  };

  const loadoutput = async (res) => {
    axios
      .get(res, {
        responseType: "arraybuffer",
      })
      .then((res) => {
        const base64 = btoa(
          new Uint8Array(res.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        setPreview(base64);
        setloading(false);
      });
  };

  const loadweb3 = async () => {
    setloading(true);
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      web3 = window.web3;

      await window.ethereum.enable();
      let m = await web3.eth.getAccounts();
      m = m[0];

      if ((await web3.eth.net.getId()) != SELECTEDNETWORK) {
        toast.error('Enable "' + SELECTEDNETWORKNAME + '" network!');
        return false;
      }

      ct = new web3.eth.Contract(abi, REACT_APP_CONTRACT_ADDRESS);

      let p = await ct.methods.outfit_price().call();

      let b = await web3.eth.getBalance(m);

      if (Number(b) < Number(p)) {
        toast.error("Insufficient ETH balance!!");
        return;
      }

      let tId = document.getElementById("WOWID").value;

      try {
        if ((await ct.methods.ownerOf(tId).call()) != m) {
          toast.error("WoO #" + tId + " not found in connected Wallet");
          return;
        }
      } catch (err) {
        toast.error("WoO #" + tId + " does not exist");
        return;
      }

      await toast
        .promise(ct.methods.mint_outfit(tId).send({ from: m, value: p }), {
          pending: "Mint in Progress!!",
          success: "Mint Success!!",
          error: "Mint Failed!!",
        })
        .then(async () => {
          await axios
            .get(`https://outfits-server.herokuapp.com/api/render/${tId}`)
            .then((res) => loadoutput(res.data));
        });
    } else {
      toast.error(
        "Non-Ethereum browser detected. Please use a crypto wallet such as MetaMask!"
      );
      return false;
    }
  };

  return (
    <div className="home_what bg-overlay LightBlue" id="intro">
      <div className="container -fluid">
        <div className="what_flex row  align-items-center">
          <div className="d-block text-center mx-auto">
            <div
              className="what_inner_text"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3 className="hidd en-xs">
                Mint an <em>Outfit</em>
              </h3>
              <div className="text-center">
                <h3
                  className=" font-weight-bold text-white "
                  style={{ fontSize: "30px " }}
                >
                  own a <em>WoO</em>?
                </h3>
                <h6 className="text-white ">
                  Enter WoO ID here <em>➡</em>
                </h6>
              </div>
              <input
                id="WOWID"
                type="number"
                class="form-control text-center"
                placeholder="Enter WOW ID"
                min={0}
                max={14999}
                onBlur={(e) => loadimage(e)}
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-start mt-5">
          <div className="col-md-4 px-5 sticky-top">
            <button
              onClick={loadweb3}
              className="bottom-right buttonPink w-100 py-3 px-0 mb-3"
            >
              Mint a Random Outfit
              <br /> (0.05 ETH + GAS)
            </button>
            <div className="previewBox my-3">
              <img
                src={`data:;base64,${preview}`}
                className="w-100 previewimg_outfit"
              />
              <img
                src="/loading.gif"
                className={loading ? "w-25 loading" : "d-none"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintOutfit;
