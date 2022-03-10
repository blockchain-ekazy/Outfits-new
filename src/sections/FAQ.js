import React from "react";

const FAQ = ()=>{
    return (
        <div className="home_faq" id="faq">
        <div className="container">
            <div className="home_faq_max py-5 my-5">
                <div className="home_road_map_heading">
                    <h3>FAQ<em>s</em></h3>
                </div>
                <div className="home_faq_flex">
                    <div className="home_faq_inner">
                        <div className="faq_1 ac-title" data-in="#tab1">
                            <h6 className="accordion">WHEN IS THE OFFICIAL LAUNCH ?</h6>
                            <div className="panel accordian-para acc-show" id="tab1">
                                <p>The official Lunch date will be the March 18.</p>
                            </div>
                        </div>
                    </div>
                    <div className="home_faq_inner">
                        <div className="faq_1 ac-title" data-in="#tab2">
                            <h6 className="accordion">What is the price to claim a body and/or mint an outfit?</h6>
                            <div className="panel accordian-para acc-show" id="tab2">
                                <p>It is free to claim your body!  You will pay gas though.  To mint an outfit the cost is .05 eth + gas.</p>
                            </div>
                        </div>
                    </div>
                    <div className="home_faq_inner">
                        <div className="faq_1 ac-title" data-in="#tab3">
                            <h6 className="accordion">How can I claim a body?</h6>
                            <div className="panel accordian-para acc-show" id="tab3">
                                <p>Currently you need to own a World of Women to claim.  We are adding Boss Beauties and Lady Fame collections soon.
                                </p></div>
                        </div>
                    </div>
                    <div className="home_faq_inner">
                        <div className="faq_1 ac-title" data-in="#tab4">
                            <h6 className="accordion">How do I get an outfit?</h6>
                            <div className="panel accordian-para acc-show" id="tab4">
                                <p>First you must claim your body (for free!).  Then you can mint an outfit for .05 eth + gas.  But first you must mint your body.</p>
                            </div>
                        </div>
                    </div>
                    <div className="home_faq_inner">
                        <div className="faq_1 ac-title" data-in="#tab5">
                            <h6 className="accordion">Where will I be able to see my body NFT and/or my body with outfit NFT?</h6>
                            <div className="panel accordian-para acc-show" id="tab5">
                                <p>Once you have minted a body and/or outfit you will be able to see the NFT by connecting your wallet to Opensea.</p>
                            </div>
                        </div>
                    </div>
                    <div className="home_faq_inner">
                        <div className="faq_1 ac-title" data-in="#tab6">
                            <h6 className="accordion">Why buy a digital outfit for my NFT?</h6>
                            <div className="panel accordian-para acc-show" id="tab6">
                                <p>We are building an ecosystem and platform for fashion and accessory (and jewelry) designers to be able to create items and place them into the World of Outfits digital collection as unique layers.  Owning a WoO NFT will be your key to this digital apparel and wearable marketplace we are creating.  Ultimately you will be able to design your own outfits and ultimately have them turned into 3d wearables for the metaverse (if you choose to).  The future of apparel/fashion is unfolding before your eyes - be part of it.</p>
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
    </div>);
}
export default FAQ;