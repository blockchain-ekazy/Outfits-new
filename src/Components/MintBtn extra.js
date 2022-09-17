import React, { useEffect, useState } from "react";
import abi from "./abi.json";
import abi_WOW from "./abi_WOW.json";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function MintButton_Extra() {
  const REACT_APP_CONTRACT_ADDRESS =
    "0xE751EDc9ff09934203847eeE3736f41542Dc3069";
  const REACT_APP_CONTRACT_ADDRESS_WOW =
    "0xe785E82358879F061BC3dcAC6f0444462D4b5330";
  const SELECTEDNETWORK = "1";
  const SELECTEDNETWORKNAME = "Ethereum";

  const [loading, setloading] = useState(false);

  let ct, web3;

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

      let b = await web3.eth.getBalance(m);
      let p = await ct.methods.extra_price().call();

      if (Number(b) < Number(p)) {
        toast.error("Insufficient ETH balance!");
        return;
      }

      await toast.promise(
        ct.methods.mintExclusive().send({ from: m, value: p }),
        {
          pending: "Mint in Progress!!",
          success: "Mint Success!!",
          error: "Mint Failed!!",
        }
      );
    } else {
      toast.error(
        "Non-Ethereum browser detected. Please use a crypto wallet such as MetaMask!"
      );
      return false;
    }
  };

  return (
    <div className="container-fluid p-3 m-0">
      <div className="row p-0 m-0 justify-content-center align-items-center">
        {/* <div className="col-md-12 p-0 position-relative">
          <img
            src={`data:;base64,${preview}`}
            className="w-25 previewi mg mx-auto d-block"
          />
        </div> */}
        <div className="col-md-12 what_inner_text py-0">
          <h3>
            Mint WoO exclusive <em>heads plus body.</em>
          </h3>
          {/* <input
            id="WOWID"
            type="number"
            class="form-control text-center"
            placeholder="Enter WOW ID"
            min={0}
            max={9999}
            onChange={(e) => loadimage(e)}
          /> */}
          <br />
          <button
            onClick={loadweb3}
            className="bottom-right buttonPink w-100 py-3 px-0"
          >
            Mint a Head + Blank Body
            <br /> .05 eth + gas
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
