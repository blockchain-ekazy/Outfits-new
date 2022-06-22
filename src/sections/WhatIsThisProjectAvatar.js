import React from "react";

import H1 from "../Components/Imgs/1x/1x/Dress A.png";
import H2 from "../Components/Imgs/1x/1x/DressB.png";
import H3 from "../Components/Imgs/1x/1x/DressC.png";
import H4 from "../Components/Imgs/1x/1x/DressD.png";
import H1A from "../Components/Imgs/1x/1x/DressA_Body.png";
import H2A from "../Components/Imgs/1x/1x/DressB_Body.png";
import H3A from "../Components/Imgs/1x/1x/DressC_Body.png";
import H4A from "../Components/Imgs/1x/1x/DressD_Body.png";


import FullBody1 from '../Components/Imgs/OnlyBody/Full Body 1.png'
import FullBody2 from '../Components/Imgs/OnlyBody/Full Body 2.png'
import FullBody3 from '../Components/Imgs/OnlyBody/Full Body 3.png'
import FullBody4 from '../Components/Imgs/OnlyBody/Full Body 4.png'
import FullBody5 from '../Components/Imgs/OnlyBody/Full Body 5.png'
import FullBody6 from '../Components/Imgs/OnlyBody/Full Body 6.png'

import Body1 from '../Components/Imgs/OnlyBody/Body 1.png'
import Body2 from '../Components/Imgs/OnlyBody/Body 2.png'
import Body3 from '../Components/Imgs/OnlyBody/Body 3.png'
import Body4 from '../Components/Imgs/OnlyBody/Body 4.png'
import Body5 from '../Components/Imgs/OnlyBody/Body 5.png'
import Body6 from '../Components/Imgs/OnlyBody/Body 6.png'



const WhatIsThisProjectAvatar = () => {
  return (
    <>
      <div className="home_bored_bunny text-center">
        <h1
          className="mt-5 text-white tect-center"
          style={{ fontSize: "70px" }}
        >
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
                  src={Body1}
                  title=""
                  alt=""
                  width="100%"
                  className="hover_hide"
                  />
                <img
                  src={FullBody1}
                  title=""
                  alt=""
                  width="100%"
                  className="hover_show"
                />
              </div>
            </div>
            <div className="home_bored_bunny_inner Blue">
              <div className="home_bored_bunny_img">
                <img
                  src={FullBody2}
                  title=""
                  alt=""
                  width="80%"
                  className="hover_show"
                />
                <img
                  src={Body2}
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
                  src={FullBody3}
                  title=""
                  alt=""
                  width="80%"
                  className="hover_show"
                />
                <img
                  src={Body3}
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
                  src={FullBody4}
                  title=""
                  alt=""
                  width="80%"
                  className="hover_show"
                />
                <img
                  src={Body4}
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
                  src={FullBody5}
                  title=""
                  alt=""
                  width="80%"
                  className="hover_show"
                />
                <img
                  src={Body5}
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
                  src={FullBody6}
                  title=""
                  alt=""
                  width="80%"
                  className="hover_show"
                />
                <img
                  src={Body6}
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
          ></div>
        </div>
        <div className="container py-3">
          <div className="row">
            <div className="col-md-6">
                <a style={{cursor:"pointer"}}>
              <h3 className="text-white ">

                {" "}
                <span className="WorldddB"> Claim </span>
                <span className="font-weight-bold" style={{ fontSize: "60px" }}>
                  Body
                </span>{" "}
              </h3>
                </a>
            </div>
            <div className="col-md-6">
            <a id="intro" style={{cursor:"pointer"}}>

              <h3 className="text-white">
                {" "}
                <span className="WorldddB"> Mint </span>
                <span className="font-weight-bold" style={{ fontSize: "60px" }}>
                  Outfit
                </span>{" "}{" "}
              </h3>
            </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhatIsThisProjectAvatar;
