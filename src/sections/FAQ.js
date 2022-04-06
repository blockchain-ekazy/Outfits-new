import { colors } from "debug/src/browser";
import React from "react";

import Div from "../Components/Imgs/1x/5.png";

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
                <div className="faq_1 ac-title">
                  <h6 className="accordion" data-in="#tab1">
                    WHEN IS THE OFFICIAL LAUNCH ?
                  </h6>
                  <div className="panel accordian-para acc-show" id="tab1">
                    <p>
                      {" "}
                      The official launch date should be around April 20th.
                      There is a lot of fine tuning happening now.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="home_faq_inner">
                <div className="faq_1 ac-title">
                  <h6 className="accordion" data-in="#tab2">
                    How can I claim a body?
                  </h6>
                  <div className="panel accordian-para acc-show" id="tab2">
                    <p>
                      Currently you need to own a World of Women to claim a
                      body. If you don’t own a WoW, then you can purchase a WoO
                      Head+Body NFT here. This will let you then mint an outfit
                      even without owning a World of Women.
                    </p>
                  </div>
                </div>
              </div>
              <div className="home_faq_inner">
                <div className="faq_1 ac-title">
                  <h6 className="accordion" data-in="#tab3">
                    How do I get an outfit?{" "}
                  </h6>
                  <div className="panel accordian-para acc-show" id="tab3">
                    <p>
                      Once you have claimed your body, you can then return to
                      our site and mint an outfit. Outfits are .05 eth + gas to
                      mint.
                    </p>
                  </div>
                </div>
              </div>
              <div className="home_faq_inner">
                <div className="faq_1 ac-title">
                  <h6 className="accordion" data-in="#tab4">
                    Where will I be able to see my body NFT and/or my body with
                    outfit NFT?{" "}
                  </h6>
                  <div className="panel accordian-para acc-show" id="tab4">
                    <p>
                      Once you have minted a body and/or outfit you will be able
                      to see the NFT by connecting your wallet to OpenSea and
                      viewing your profile (like any other NFT).
                    </p>
                  </div>
                </div>
              </div>
              <div className="home_faq_inner">
                <div className="faq_1 ac-title">
                  <h6 className="accordion" data-in="#tab5">
                    What is the price to claim a body and/or mint an outfit?
                  </h6>
                  <div className="panel accordian-para acc-show" id="tab5">
                    <p>
                      If you own a WoW, then you can claim your body for .02 eth
                      + gas. To mint an outfit onto one of your bodies, the
                      price is .05 eth + gas. If you don’t own a WoW, then you
                      can mint a WoO NFT (Head+Body) for .05 eth + gas. Then you
                      can mint an outfit for the same .05 eth on your WoO
                      head+body.
                    </p>
                  </div>
                </div>
              </div>
              <div className="home_faq_inner">
                <div className="faq_1 ac-title">
                  <h6 className="accordion" data-in="#tab6">
                    Is there a reveal?
                  </h6>
                  <div className="panel accordian-para acc-show" id="tab6">
                    <p>
                      There is no reveal. Once you mint an outfit, you will see
                      the outfit instantly once the NFT is in your wallet.
                    </p>
                  </div>
                </div>
              </div>

              <div className="home_faq_inner">
                <div className="faq_1 ac-title">
                  <h6 className="accordion" data-in="#tab7">
                    What does World of Outfits have to do with the metaverse?{" "}
                  </h6>
                  <div className="panel accordian-para acc-show" id="tab7">
                    <p>
                      Ultimately we are working to digitize all outfits into
                      wearables for the metaverse specifically Decentraland but
                      can develop for other metaverses as well.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="home_faq_inner">
                <div className="faq_1 ac-title">
                  <h6 className="accordion" data-in="#tab8">
                    How do I get a 3d wearable for the metaverse?{" "}
                  </h6>
                  <div className="panel accordian-para acc-show" id="tab8">
                    <p>
                      If you mint either a Costume Outfit (300 of them) or a
                      Legendary Outfit (150 of them) then you will receive an
                      actual 3d wearable of your outfit if 25% and 50% of the
                      outfit mint sells out respectively. If you don’t receive
                      one of the rare outfits, we are still building a mechanism
                      now that would allow users to pay a small service fee to
                      digitize any outfit into a wearable for the metaverse.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="home_faq_inner">
                <div className="faq_1 ac-title">
                  <h6 className="accordion" data-in="#tab9">
                    Are you collab’ing?{" "}
                  </h6>
                  <div className="panel accordian-para acc-show" id="tab9">
                    <p>
                      Yes! We are looking to collab with apparel, accessory, and
                      jewelry designers to add traits/layers into our next
                      collection.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="home_faq_inner">
                <div className="faq_1 ac-title">
                  <h6 className="accordion" data-in="#tab10">
                    Is this project Sponsored by World of Women?{" "}
                  </h6>
                  <div className="panel accordian-para acc-show" id="tab10">
                    <p>
                      No. We developed this on our own but we have reached out
                      as we would love to work with them in some capacity to
                      bring all of their NFT holders additional benefit/value.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="home_faq_inner">
                <div className="faq_1 ac-title">
                  <h6 className="accordion" data-in="#tab11">
                    What other NFT collections are you building bodies and
                    outfits for?{" "}
                  </h6>
                  <div className="panel accordian-para acc-show" id="tab11">
                    <p>
                      We are working on World of Women Galaxy, Boss Beauties,
                      and Fame Lady Squad Where is World of Outfits located? We
                      are spread out globally of course! Some are in California,
                      Arizona, New York, Serbia, Pakistan, Ukraine{" "}
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
