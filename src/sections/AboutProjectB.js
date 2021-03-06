import React from "react";

import Image1 from "../Components/Imgs/Body/Artboard 1.png";
import Image2 from "../Components/Imgs/Body/Artboard 3.png";
import Image3 from "../Components/Imgs/Body/Artboard 5.png";
import Image4 from "../Components/Imgs/Body/Artboard 7.png";
import Image5 from "../Components/Imgs/Body/Artboard 9.png";
import Image6 from "../Components/Imgs/Body/Artboard 11.png";
import Image7 from "../Components/Imgs/Body/Artboard 13.png";
import Image8 from "../Components/Imgs/Body/Artboard 15.png";

const AboutProject = () => {
  return (
    <div className="home_what Blue" id="intro">
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
          <div className="what_inner ">
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
                  <img
                    className="ml-3 ml-md-0"
                    src={Image1}
                    title=""
                    alt=""
                    width="400%"
                  />
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
                  <img
                    className="ml-3 ml-md-0"
                    src={Image2}
                    title=""
                    alt=""
                    width="400%"
                  />
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
                  <img
                    className="ml-3 ml-md-0"
                    src={Image3}
                    title=""
                    alt=""
                    width="400%"
                  />
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
                  <img
                    className="ml-3 ml-md-0"
                    src={Image4}
                    title=""
                    alt=""
                    width="400%"
                  />
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
                  <img
                    className="ml-3 ml-md-0"
                    src={Image5}
                    title=""
                    alt=""
                    width="400%"
                  />
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
                  <img
                    className="ml-3 ml-md-0"
                    src={Image6}
                    title=""
                    alt=""
                    width="400%"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="what_inner text-center text-sm-left">
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
              <h3
                className="hidden-xs text-center"
                style={{ fontSize: "60px" }}
              >
                {/* After You Have A <em> Body</em> Then */}
                ONCE YOU HAVE A BODY
                <br />
                <em> MINT</em> AN OUTFIT
              </h3>

              <div className="text-center my-3">
                <a
                  href="/mint-outfit"
                  className="text-white bottom-right mx-2 buttonPink"
                >
                  Mint Outfit <br /> .05 eth + gas{" "}
                </a>
              </div>

              <h5 className=" text-white">
                {" "}
                {/* Once you have a body Mint an Outfit" After you have claimed your body, mint an outfit. All outfits and accessories have been designed by actual fashion designers               */}
                10,000 different outfits created from a massive assortment of
                different tops, pants, jackets, dresses, swimsuits, skirts,
                socks, shoes, jewelry, and accessories (e.g. think designer
                handbags).
              </h5>

              {/* <h3
                className=" font-weight-bold text-white "
                style={{ fontSize: "40px " }}
              >
                own a <em>wow</em>?
              </h3> */}

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

          {/* <h3 className="mt-5  text-center text-white">Borows outfits</h3> */}
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
