import { colors } from "debug/src/browser";
import React from "react";

import Div from '../Components/Imgs/1x/5.png'

const FAQ = () => {
  return (
    <>
    
    
    <div className="home_faq LightBlue mt-0 " id="faq">
      <div className="container">
        <div className="home_faq_max py-5">
          <div className="home_road_map_heading text-center">
            <h3>
              FAQ<em>s</em>
            </h3>
          </div>
          <div className="home_faq_flex">
            <div className="home_faq_inner">
              <div className="faq_1 ac-title" >
                <h6 className="accordion" data-in="#tab1">WHEN IS THE OFFICIAL LAUNCH ?</h6>
                <div className="panel accordian-para acc-show" id="tab1">
                  <p>The official launch date will be the March 18.</p>
                </div>
              </div>
            </div>
            <div className="home_faq_inner">
              <div className="faq_1 ac-title" >
                <h6 className="accordion" data-in="#tab2">
                  What is the price to claim a body and/or mint an outfit?
                </h6>
                <div className="panel accordian-para acc-show" id="tab2">
                  <p>
                    If you own a WoW, then you can claim your body for .02 eth +
                    gas. To mint an outfit onto one of your bodies, the price is
                    .05 eth + gas. If you don't own a WoW, then you must mint
                    one of our heads attached to a body for .05. Then you can
                    mint an outfit on your body at the same price above.
                  </p>
                </div>
              </div>
            </div>
            <div className="home_faq_inner">
              <div className="faq_1 ac-title">
                <h6 className="accordion" data-in="#tab3">How can I claim a body?</h6>
                <div className="panel accordian-para acc-show" id="tab3">
                  <p>
                    Currently you need to own a World of Women to claim a body.
                    If you don't have a WoW, then you can purchase a WoO head{" "}
                    <a href="#Mint" style={{ cursor: "pointer" }}>
                      {" "}
                      here{" "}
                    </a>
                    . This will let you then claim a body and then ultimately
                    mint an outfit.
                  </p>
                </div>
              </div>
            </div>
            <div className="home_faq_inner">
              <div className="faq_1 ac-title" >
                <h6 className="accordion" data-in="#tab4">How do I get an outfit?</h6>
                <div className="panel accordian-para acc-show" id="tab4">
                  <p>
                    First you must claim your body   <a href="#Mint" style={{ cursor: "pointer" }}>
                      {" "}
                      here{" "}
                    </a> If you don't own a WoW,
                    then mint a WoO head connected to a body   <a href="#Mint" style={{ cursor: "pointer" }}>
                      {" "}
                      here{" "}
                    </a> Once you have
                    your body, then you must mint an outfit for .05 eth + gas.
                    Mint outfit   <a href="#Mint" style={{ cursor: "pointer" }}>
                      {" "}
                      here{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="home_faq_inner">
              <div className="faq_1 ac-title" >
                <h6 className="accordion" data-in="#tab5">
                  Where will I be able to see my body NFT and/or my body with
                  outfit NFT?
                </h6>
                <div className="panel accordian-para acc-show" id="tab5">
                  <p>
                    Once you have minted a body and/or outfit you will be able
                    to see the NFT by connecting your wallet to Opensea.
                  </p>
                </div>
              </div>
            </div>
            <div className="home_faq_inner">
              <div className="faq_1 ac-title" >
                <h6 className="accordion" data-in="#tab6">
                  Why buy a digital outfit for my NFT?
                </h6>
                <div className="panel accordian-para acc-show" id="tab6">
                  <p>
                    We are building an ecosystem and platform for fashion and
                    accessory (and jewelry) designers to be able to create items
                    and place them into the World of Outfits digital collection
                    as unique layers. Owning a WoO NFT will be your key to this
                    digital apparel and wearable marketplace we are creating.
                    Ultimately you will be able to design your own outfits and
                    ultimately have them turned into 3d wearables for the
                    metaverse (if you choose to). The future of apparel/fashion
                    is unfolding before your eyes - be part of it.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="view_all">
                    <a href="#" className="btn"><span>LOAD MORE QUESTION</span>
                        <img src="img/btn_img3.png" title="" alt=""/></a>
                </div> */}
        </div>
      </div>
    </div>
    <div className="Divend">
    <img className="w-100" src={Div}></img>
    </div>
    </>

  );
};
export default FAQ;
