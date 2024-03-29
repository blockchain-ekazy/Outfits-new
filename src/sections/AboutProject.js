import React from "react";

import H1 from "../Components/Imgs/1x/Full/BodyA.png";
import H2 from "../Components/Imgs/1x/Full/BodyB.png";
import H3 from "../Components/Imgs/1x/Full/BodyC.png";
import H4 from "../Components/Imgs/1x/Full/BodyA.png";
import H1A from "../Components/Imgs/1x/Full/BodyD.png";
import H2A from "../Components/Imgs/1x/Full/BodyC.png";


import Body1 from '../Components/Imgs/OnlyBody/Body 1.png'
import Body2 from '../Components/Imgs/OnlyBody/Body 2.png'
import Body3 from '../Components/Imgs/OnlyBody/Body 3.png'
import Body4 from '../Components/Imgs/OnlyBody/Body 4.png'
import Body5 from '../Components/Imgs/OnlyBody/Body 5.png'
import Body6 from '../Components/Imgs/OnlyBody/Body 6.png'

import Gif from "../Components/Imgs/BodyGif.gif";

const AboutProject = () => {
  return (
    <div className="home_what bg-overlay LightBlue" id="intro">
      <div className="container ">
        {/* <div
          className="home_welcome"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3>
            Welcome to a project who is working hard to bring fashion to the
            metaverse.
          </h3>
          <p>
            Claim a body for your World of Women. Then mint an outfit for her to
            wear.
          </p>
          <a href=""
                       className="btn"><span>VIEW ALL COLLECTION</span> <img src="img/btn_img3.png" title="" alt=""/></a>
        </div> */}
        <div className="what_flex row  align-items-center">
          <div className="what_inner text-center text-sm-left">
            <div
              className="what_inner_text"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3 className="hidd en-xs">
                What is world of <em>Outfits</em>
              </h3>
              <h5 className=" text-white">
                World of Outfits is a web3 fashion brand that has created an NFT
                collection of 10,000 bodies and 10,000 outfits designed to match
                your World of Women NFT.
                <br />
                <br />
                Owning a WoO NFT isn't just about getting a cool digital
                illustration for your PFP. You are joining a community dedicated
                to exploring and developing fashion and actual 3d wearables in
                the metaverse.
              </h5>

              <div className="container mt-3">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="text-center">
                      <h3
                        className=" font-weight-bold text-white "
                        style={{ fontSize: "30px " }}
                      >
                        own a <em>wow</em>?
                      </h3>
                      <h6 className="text-white ">
                        then Claim body here <em>➡</em>
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div>
                      <button
                        data-toggle="modal"
                        data-target="#mintModal"
                        className="bottom-right mx-2 my-3 buttonPink"
                      >
                        {" "}
                        Claim Body <br /> Free + Gas
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <h1 className="text-white text-sm-left text-center ddd"> </h1> */}

              {/* <a href="#Mint" className=" btn mx-md-0 mx-auto py-2 mt-3" >
                  <img src="img/btn_img2.png" title="" alt=""/> 
                  <span className="">
                   Claim  Body<br/>
                     .02 eth
                  </span>
                </a> */}
            </div>
          </div>
          <div className="what_inner">
            <div className="home_meet_team_slider">
              <div
                className="home_meet_team_inner slick-slide slick-active"
                tabIndex="-1"
                role="option"
                aria-describedby="slick-slide01"
                style={{ width: 282 }}
                data-slick-index="1"
                aria-hidden="true"
              >
                <div className="home_meet_team_img">
                  <img src={Body1} title="" alt="" width="400%"className="ml-3 ml-md-0"   />
                </div>
                <div className="home_meet_team_text">
                  {/* <h3>Visionary</h3> */}
                  {/* <h4>CO-FOUNDER</h4> */}
                </div>
              </div>
              <div
                className="home_meet_team_inner  slick-slide slick-active"
                tabIndex="0"
                role="option"
                aria-describedby="slick-slide02"
                style={{ width: 282 }}
                data-slick-index="2"
                aria-hidden="true"
              >
                <div className="home_meet_team_img">
                  <img src={Body2} title="" alt="" width="400%"className="ml-3 ml-md-0"    />
                </div>
                <div className="home_meet_team_text">
                  {/* <h3>Jelena</h3> */}
                  {/* <h4>BLOCKCHAIN EXPERT</h4> */}
                </div>
              </div>
              <div
                className="home_meet_team_inner  slick-slide slick-active"
                tabIndex="2"
                role="option"
                aria-describedby="slick-slide03"
                style={{ width: 282 }}
                data-slick-index="3"
                aria-hidden="true"
              >
                <div className="home_meet_team_img">
                  <img src={Body3} title="" alt="" width="400%"className="ml-3 ml-md-0"    />
                </div>
                <div className="home_meet_team_text">
                  {/* <h3>Dreamer</h3> */}
                  {/* <h4>DESIGNER</h4> */}
                </div>
              </div>
              <div
                className="home_meet_team_inner  slick-slide slick-active"
                tabIndex="3"
                role="option"
                aria-describedby="slick-slide04"
                style={{ width: 282 }}
                data-slick-index="4"
                aria-hidden="true"
              >
                <div className="home_meet_team_img">
                  <img src={Body4} title="" alt="" width="400%"className="ml-3 ml-md-0"    />
                </div>
                <div className="home_meet_team_text">
                  {/* <h3>Collab</h3> */}
                  {/* <h4>DESIGNER</h4> */}
                </div>
              </div>
              <div
                className="home_meet_team_inner  slick-slide slick-active"
                tabIndex="4"
                role="option"
                aria-describedby="slick-slide05"
                style={{ width: 282 }}
                data-slick-index="5"
                aria-hidden="true"
              >
                <div className="home_meet_team_img">
                  <img src={Body5} title="" alt="" width="400%"className="ml-3 ml-md-0"    />
                </div>
                <div className="home_meet_team_text">
                  {/* <h3>sabirpro</h3>
                  <h4>Developer</h4> */}
                </div>
              </div>
              <div
                className="home_meet_team_inner  slick-slide slick-active"
                tabIndex="5"
                role="option"
                aria-describedby="slick-slide06"
                style={{ width: 282 }}
                data-slick-index="6"
                aria-hidden="true"
              >
                <div className="home_meet_team_img">
                  <img src={Body6} title="" alt="" width="400%"className="ml-3 ml-md-0"    />
                </div>
                <div className="home_meet_team_text">
                  {/* <h3>Robyan</h3> */}
                  {/* <h4>CO-FOUNDER</h4> */}
                </div>
              </div>
            </div>
            <h3 className="mt-5 text-center text-white">
              Your body will be same skintone as your current PFP
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
