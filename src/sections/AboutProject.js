import React from "react";

import H1 from "../Components/Imgs/1x/Full/BodyA.png";
import H2 from "../Components/Imgs/1x/Full/BodyB.png";
import H3 from "../Components/Imgs/1x/Full/BodyC.png";
import H4 from "../Components/Imgs/1x/Full/BodyA.png";
import H1A from "../Components/Imgs/1x/Full/BodyD.png";
import H2A from "../Components/Imgs/1x/Full/BodyC.png";
import MCircle from "../Components/Imgs/Capture1-modified.png";
import Circle1 from "../Components/Imgs/Capture2-modified.png";
import Circle2 from "../Components/Imgs/Capture3-modified.png";
import Circle3 from "../Components/Imgs/Capture4-modified.png";

import Gif from "../Components/Imgs/BodyGif.gif";

const AboutProject = () => {
  return (
    <div className="home_what" id="intro">
      <div className="container ">
        <div
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
          {/* <a href=""
                       className="btn"><span>VIEW ALL COLLECTION</span> <img src="img/btn_img3.png" title="" alt=""/></a> */}
        </div>
        <div className="what_flex row align-items-center">
          <div className="what_inner">
            <div
              className="what_inner_text visible-xs"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3>
                <em>Own</em>a WOW?
              </h3>
            </div>
            <div
              className="what_inner_text"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3 className="hidden-xs">
                <em>What is</em>
                {/* <br /> */}
                world of outfits
              </h3>

              <div className="py-5">
                <h3 className=" font-weight-bold text-white " style={{fontSize : "40px "}}>own a wow?</h3>
                
                {/* <h1 className="text-white text-sm-left text-center ddd"> </h1> */}

                <a href="#Mint" className=" btn mx-md-0 mx-auto py-2 mt-3" >
                  {/* <img src="img/btn_img2.png" title="" alt=""/>  */}
                  <span className="">
                   Claim  Body<br/>
                     .02 eth
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="what_inner">
          <h5 className="font-weight-bold text-white">World of outfits is a collection of 10,000 bodies designed to match your world of women NFT.</h5>
            
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
                  <img src={H1} title="" alt="" width="100%" />
                </div>
                <div className="home_meet_team_text">
                  <h3>Visionary</h3>
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
                  <img src={H2} title="" alt="" width="100%" />
                </div>
                <div className="home_meet_team_text">
                  <h3>Jelena</h3>
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
                  <img src={H3} title="" alt="" width="100%" />
                </div>
                <div className="home_meet_team_text">
                  <h3>Dreamer</h3>
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
                  <img src={H4} title="" alt="" width="100%" />
                </div>
                <div className="home_meet_team_text">
                  <h3>Collab</h3>
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
                  <img src={H1A} title="" alt="" width="100%" />
                </div>
                <div className="home_meet_team_text">
                  <h3>sabirpro</h3>
                  <h4>Developer</h4>
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
                  <img src={H2A} title="" alt="" width="100%" />
                </div>
                <div className="home_meet_team_text">
                  <h3>Robyan</h3>
                  {/* <h4>CO-FOUNDER</h4> */}
                </div>
              </div>
            </div>
          </div>













        </div>
      </div>
    </div>
  );
};

export default AboutProject;
