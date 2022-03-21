import React from "react";

import ImgA from "../Components/Imgs/Capture1-modified.png";
import ImgB from "../Components/Imgs/Capture2-modified.png";
import ImgC from "../Components/Imgs/Capture3-modified.png";

const HomeBanner = () => {
  return (
    <div className="home_banner HeadHome" id="home">
      <div className="hidden-xs">
        {/* <img src="img/banner_new.png" title="" alt="" width="100%"/> */}
      </div>
      <div className="visible-xs">
        {/* <img src="img/mob_banner.png" title="" alt="" width="100%"/> */}
      </div>
      <div className="home_banner_position pt-5 mt-5">
        <a id="Mint"></a>

        <div
          className="home_banner_text text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h5 className="text-white">
            Bringing digital apparel, accessories, and fashion to NFTs and the
            metaverse
          </h5>
          <h3>
            <em>World</em> OF Outfits
          </h3>
          <p>To get started, first claim a body, then mint an outfit</p>
          <div className="btn_flex">
            <div className="btn_flex_inner">
              <a href="" className="btn py-2">
                {/* <img src="img/btn_img2.png" title="" alt=""/> */}
                Mint Outfits <br /> .05 eth{" "}
              </a>
            </div>
            <div className="btn_flex_inner p-0">
              <a href="" className=" py-2 btn ">
                {/* <img src="img/btn_img2.png" title="" alt=""/> */}
                Claim Body <br /> Free + Gas{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll_down"></div>
      <div
        className="banner_icon banner_icon1"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img src={ImgA} title="" alt="" />
      </div>
      <div
        className="banner_icon banner_icon2"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img src={ImgB} title="" alt="" />
      </div>
      <div
        className="banner_icon banner_icon3"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img src={ImgC} title="" alt="" />
      </div>
    </div>
  );
};
export default HomeBanner;
