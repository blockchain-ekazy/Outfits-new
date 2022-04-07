import React from "react";

import H1 from "../Components/Imgs/1x/1x/Dress A.png";
import H2 from "../Components/Imgs/1x/1x/DressB.png";
import H3 from "../Components/Imgs/1x/1x/DressC.png";
import H4 from "../Components/Imgs/1x/1x/DressD.png";
import H1A from "../Components/Imgs/1x/1x/DressA_Body.png";
import H2A from "../Components/Imgs/1x/1x/DressB_Body.png";
import H3A from "../Components/Imgs/1x/1x/DressC_Body.png";
import H4A from "../Components/Imgs/1x/1x/DressD_Body.png";

const WhatIsThisProjectAvatar = () => {
  return (
    <div className="home_bored_bunny text-center">
      <h1 className="mt-5 text-white tect-center" style={{fontSize:"70px"}}>
        <span className="WorldddA"> World </span> of Outfits
      </h1>
      <h3 className="mb-5 text-center text-white">
        Hover over a body to see an outfit
      </h3>

      <div className="home_bored_bunny_max">
        <div className="home_bored_bunny_flex HoverImgs text-center ">
          <div className="home_bored_bunny_inner LightBlue">
            <div className="home_bored_bunny_img">
              <img
                src={H1}
                title=""
                alt=""
                width="80%"
                className="hover_show"
              />
              <img
                src={H1A}
                title=""
                alt=""
                width="80%"
                className="hover_hide"
              />
            </div>
          </div>
          <div className="home_bored_bunny_inner Blue">
            <div className="home_bored_bunny_img">
              <img
                src={H2}
                title=""
                alt=""
                width="80%"
                className="hover_show"
              />
              <img
                src={H2A}
                title=""
                alt=""
                width="80%"
                className="hover_hide"
              />
            </div>
          </div>
          <div className="home_bored_bunny_inner LightBlue">
            <div className="home_bored_bunny_img">
              <img
                src={H3}
                title=""
                alt=""
                width="80%"
                className="hover_show"
              />
              <img
                src={H3A}
                title=""
                alt=""
                width="80%"
                className="hover_hide"
              />
            </div>
          </div>
          <div className="home_bored_bunny_inner Blue">
            <div className="home_bored_bunny_img">
              <img
                src={H4}
                title=""
                alt=""
                width="80%"
                className="hover_show"
              />
              <img
                src={H4A}
                title=""
                alt=""
                width="80%"
                className="hover_hide"
              />
            </div>
          </div>
          <div className="home_bored_bunny_inner LightBlue">
            <div className="home_bored_bunny_img">
              <img
                src={H1}
                title=""
                alt=""
                width="80%"
                className="hover_show"
              />
              <img
                src={H1A}
                title=""
                alt=""
                width="80%"
                className="hover_hide"
              />
            </div>
          </div>
          <div className="home_bored_bunny_inner Blue">
            <div className="home_bored_bunny_img">
              <img
                src={H2}
                title=""
                alt=""
                width="80%"
                className="hover_show"
              />
              <img
                src={H2A}
                title=""
                alt=""
                width="80%"
                className="hover_hide"
              />
            </div>
          </div>
        </div>
        <div
          className="home_bored_text "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3 className="">
                  {" "}
                  <span className="WorldddB"> Claim </span>Body{" "}
                </h3>
              </div>
              <div className="col-md-6">
                <h3 className="">
                  {" "}
                  <span className="WorldddB"> Mint </span>Outfit{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhatIsThisProjectAvatar;
