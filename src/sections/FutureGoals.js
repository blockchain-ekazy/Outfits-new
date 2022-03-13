import React from "react";

import Img from "../Components/Imgs/FG.png";

import ImgG from "../Components/Imgs/H2.PNG";

const FutureGoals = () => {
  return (
    <div>
      <div className="container">
        <div className="home_road_map_heading">
        <a id="goals"></a>
          <h3>
            <em>FUTURE</em> GOALS
          </h3>
        </div>

        <div className="row align-items-center ">
          <div className="col-4 ">
            <div className="">
              <img
                src={Img}
                className="d-block m-auto"
                width="200px"
                title=""
                alt=""
              />
            </div>
          </div>
          <div className="col-8">
            <p className="text-white h4">
              - allowing users to select whatever traits/outfit they desire and
              minting that outfit onto their WoW <br/>
              - working with emerging apparel
              and accessory designers to add additional traits/layers into our
              system to allow for an increasing amount of outfit options <br/>
              - ability to claim different body types so we create a more diverse
              and reaslistic set of bodies <br/>
              - creating bodies and outfits for a
              number of other PFP collections! (Boss Beauties and Lady Fame are
              next) <br/>
              - the ability to create 3d wearable versions of all outfits
              so you can wear your minted outfit in the metaverse <br/>
              - flourishing
              as a creative fashion platform allowing end users and designers to
              collab and create endless looks for the metaverse and IRL<br/> 
              - 3d sewing your garment and sending to you! Ok
            </p>

            <div className="community_inner">
              <a href="#Body" className="btn my-3">
                {/* <img src="img/btn_img2.png" title="" alt="" /> */}
                <span>CLAIM BODY</span>
              </a>
            </div>
            <div className="community_inner">
              <a href="#" className="btn btn2">
                {/* <img src="img/icon6.png" title="" alt="" /> */}
                <span>MINT OUTFITS</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
                <div className="home_road_map_heading">
                    <h3><em>FUTURE</em> GOALS</h3>
                  
                </div>
                
                <div className="home_community row">
                    <div className="home_community_img col-4">
                        <img src={Img} width='200px' title="" alt="" />
                    </div>
                    <div className="col-8 home_community_inner" data-aos="fade-left" data-aos-duration="1000">

                        <div className="home_community_inner" data-aos="fade-right"
                            data-aos-duration="1000">
                            <div className="home_community_text">
                                <p>Together, let’s build the best exclusive club never seen before. Show to the world how strong
                                    and influent we are. Let’s take over the Metaverse.</p>
                                <div className="community_flex">
                                    <div className="community_inner">
                                        <a href="#" className="btn"> <img src="img/btn_img2.png" title="" alt="" /> <span>JOIN OUR DISCORD</span></a>
                                    </div>
                                    <div className="community_inner">
                                        <a href="#" className="btn btn2"> <img src="img/icon6.png" title="" alt="" /> <span>FOLLOW US</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default FutureGoals;
