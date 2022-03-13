import React from "react";

import H1 from "../Components/Imgs/1x/DressA.png";
import H2 from "../Components/Imgs/1x/DressB.png";
import H3 from "../Components/Imgs/1x/DressC.png";
import H4 from "../Components/Imgs/1x/DressD.png";
import H1A from "../Components/Imgs/1x/DressF.png";
import H2A from "../Components/Imgs/1x/DressG.png";
import MCircle from "../Components/Imgs/Capture1-modified.png";
import Circle1 from "../Components/Imgs/Capture2-modified.png";
import Circle2 from "../Components/Imgs/Capture3-modified.png";
import Circle3 from "../Components/Imgs/Capture4-modified.png";

import Gif from "../Components/Imgs/BodyGif.gif";
import SpecialItems from "./SpecialItemsS";
import SpecialItems2 from "./SpecialItemsS2";

const AboutProject = () => {
  return (
    <div className="home_what" id="intro">
      <div className="container ">
       
        <div className="what_flex row align-items-center">
          <div className="what_inner">
           
            <div
              className="what_inner_text"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              

              <div className="text-center py-5">
                <h1 className="text-white text-center">After you have a body then</h1>

                <a href="#Mint" className="d-block mx-auto btn ">
                  {/* <img src="img/btn_img2.png" title="" alt=""/>  */}
                  <span>
                    Mint An Outfit<br /> .05 eth
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="what_inner" style={{position: "relative"}}>



          
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
