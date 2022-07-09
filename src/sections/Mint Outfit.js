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
    "0x59A7c7d9ef2f72e3916Bdd266A3494eE04e6Caa7";
  const SELECTEDNETWORK = "4";
  const SELECTEDNETWORKNAME = "Ethereum";

  const [preview, setPreview] = useState(p);
  const [loading, setloading] = useState(false);
  const [selected_outfit, setSelected_outfit] = useState();

  let ct, web3;

  const loadimage = async (e) => {
    setloading(true);

    axios
      .get(
        "https://worldofoutfits.com/bodies/unnamed-" + e.target.value + ".png",
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

  const selectoutfit = async (e) => {
    setSelected_outfit(e.target.value);

    let checks = document.getElementsByTagName("input");
    for (let index = 0; index < checks.length; index++) {
      checks[index].checked = false;
    }
    e.target.checked = true;
  };

  const loadweb3 = async () => {
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

      let p = await ct.methods.price().call();
      let b = await web3.eth.getBalance(m);

      if (Number(b) < Number(p)) {
        toast.error("Insufficient ETH balance!!");
        return;
      }

      let tId = document.getElementById("WOWID").value;

      try {
        if ((await ct.methods.ownerOf(tId).call()) != m) {
          toast.error("WOW #" + tId + " not found in connected Wallet");
          return;
        }
      } catch (err) {
        toast.error("WOW #" + tId + " does not exist");
        return;
      }

      await toast
        .promise(ct.methods.mint_outfit(tId).send({ from: m, value: p }), {
          pending: "Mint in Progress!!",
          success: "Mint Success!!",
          error: "Mint Failed!!",
        })
        .then(async () => {
          let s;
          document.getElementsByName("selected_outfit").forEach((c, i) => {
            if (c.checked) s = c.value;
          });
          await axios
            .get(`https://outfits-server.herokuapp.com/api/render/${tId}/${s}`)
            .then((res) => console.log(res.data));
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

              <div className="container mt-3">
                <div className="row align-items-center">
                  <div className="col-md-6">
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
                  </div>
                  <div className="col-md-6">
                    <div>
                      <input
                        id="WOWID"
                        type="number"
                        class="form-control text-center"
                        placeholder="Enter WOW ID"
                        min={0}
                        max={9999}
                        onChange={(e) => loadimage(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-start mt-5">
          <div className="col-md-4 px-5 sticky-top">
            <div className="previewBox my-3">
              <img
                src={`data:;base64,${preview}`}
                className="w-100 previewimg_outfit"
              />
              {selected_outfit ? (
                <img
                  src={`./outfits/full/${selected_outfit}.png`}
                  className="w-100 previewimg_outfit"
                />
              ) : (
                ""
              )}
              <img
                src="/loading.gif"
                className={loading ? "w-25 loading" : "d-none"}
              />
            </div>
            <button
              onClick={loadweb3}
              className="bottom-right buttonPink w-100 py-3 px-0 mb-3"
            >
              Mint
            </button>
          </div>
          <div className="col-md-8">
            <div className="px-3 outfit_selection">
              <h3
                className="font-weight-bold text-white "
                style={{ fontSize: "30px " }}
              >
                Select an <em>Outfit</em>
              </h3>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="70s costume"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  70s costume
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="ballerina costume"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  ballerina costume
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="bascetball jersey outfit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  bascetball jersey outfit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="basebal player jersey"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  basebal player jersey
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="bear costume"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  bear costume
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="black and white swimsuit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  black and white swimsuit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="black dress"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  black dress
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="blue green tie dye swimsuit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  blue green tie dye swimsuit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="bunny costume"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  bunny costume
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="ceo  outfit casual"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  ceo outfit casual
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="ceo outfit formal"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  ceo outfit formal
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="colorfull cutt out dress"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  colorfull cutt out dress
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="colorfull one piece"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  colorfull one piece
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="corset sleeve"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  corset sleeve
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="diamond costume"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  diamond costume
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="disco outfit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  disco outfit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="doctor outfit iguanamed blue scrub"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  doctor outfit iguanamed blue scrub
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="doctor outfit iguanamed scrub"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  doctor outfit iguanamed scrub
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input type="checkbox" name="selected_outfit" value="dress 3" />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  dress 3
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input type="checkbox" name="selected_outfit" value="dress 4" />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  dress 4
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input type="checkbox" name="selected_outfit" value="dress 5" />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  dress 5
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input type="checkbox" name="selected_outfit" value="dress 6" />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  dress 6
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input type="checkbox" name="selected_outfit" value="dress 8" />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  dress 8
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input type="checkbox" name="selected_outfit" value="dress 9" />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  dress 9
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input type="checkbox" name="selected_outfit" value="dress" />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  dress
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="embelished bikini"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  embelished bikini
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="fire swimsuit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  fire swimsuit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="firewoman outfit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  firewoman outfit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="flaper costume-01"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  flaper costume-01
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="gangster lady costume"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  gangster lady costume
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="golden swimsuit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  golden swimsuit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="green embelished swimsuit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  green embelished swimsuit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input type="checkbox" name="selected_outfit" value="green" />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  green
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="jeans jumpsuit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  jeans jumpsuit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="karate woman"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  karate woman
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input type="checkbox" name="selected_outfit" value="komplet" />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  komplet
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="l avander  swimsuit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  l avander swimsuit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="lime swimsuit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  lime swimsuit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="long black tulle dress"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  long black tulle dress
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="nft trader outfit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  nft trader outfit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="off shoulders swimsuit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  off shoulders swimsuit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="one piece red swimsuit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  one piece red swimsuit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="pilot outfit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  pilot outfit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="pink print"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  pink print
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="pink tie die swimsuit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  pink tie die swimsuit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="prisoner outfit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  prisoner outfit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="purple top swimsuit and shorts"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  purple top swimsuit and shorts
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="race car driver outfit x"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  race car driver outfit x
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="sailor pirate costume"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  sailor pirate costume
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input type="checkbox" name="selected_outfit" value="set" />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  set
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="skeleton costume"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  skeleton costume
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="sky blue tie dye swimsuit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  sky blue tie dye swimsuit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="spacesuit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  spacesuit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="sports referee outfit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  sports referee outfit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input type="checkbox" name="selected_outfit" value="suit" />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  suit
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="tiger woman costume"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  tiger woman costume
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="top and leggings 2"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  top and leggings 2
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="top and leggings"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  top and leggings
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="wicked witch costume"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  wicked witch costume
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="yellow dress"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  yellow dress
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="zebra costume"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  zebra costume
                </span>
              </label>
              <label onClick={selectoutfit}>
                <input
                  type="checkbox"
                  name="selected_outfit"
                  value="zookeeper outfit"
                />
                <span className="b ottom-right text-center buttonPink w- py-3 px-3">
                  zookeeper outfit
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintOutfit;
