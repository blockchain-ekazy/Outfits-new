import React from "react";

import ImgA from "../Components/Imgs/1x/Full BOdy/head1.png";
import ImgB from "../Components/Imgs/1x/Full BOdy/head2.png";
import ImgC from "../Components/Imgs/1x/Full BOdy/head3.png";
import ImgD from "../Components/Imgs/1x/Full BOdy/head4.PNG";

const HomeBanner = () => {
  return (
    <>
    <a id="intro"></a>
    <div
    className="home_banner HeadHome bg-overlay"
    id="home"
    style={{ backgroundColor: "#1e2d5b" }}
    >
      <a id="home"></a>
      <div className="hidden-xs">
        {/* <img src="img/banner_new.png" title="" alt="" width="100%"/> */}
      </div>
      <div className="visible-xs">
        {/* <img src="img/mob_banner.png" title="" alt="" width="100%"/> */}
      </div>
      <div className="home_banner_position pt-5 mt-md-5">
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
          World OF   <em>Outfits</em>
          </h3>
          <p>To get started, first claim a body, then mint an outfit</p>
          <div className="btn_flex">
            <div>
              <button className="bottom-right mx-2 buttonBlue my-2">
                {" "}
                Claim Body <br /> Free + Gas
              </button>
            </div>
            {/* <div className="btn_flex_inner p-0">
              <a href="" className=" py-2 btn ">
                <img src="img/btn_img2.png" title="" alt=""/>
                Claim Body <br /> Free + Gas{" "}
              </a>
            </div> */}
            <div>
              <button className="bottom-right mx-2 buttonPink">
                Mint Outfit <br /> .05 eth + gas{" "}
              </button>
            </div>
            {/* <div className="btn_flex_inner">
              <a href="" className="btn py-2">
                <img src="img/btn_img2.png" title="" alt=""/>
                Mint Outfits <br /> .05 eth + gas{" "}
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="scroll_down"></div>
      <div
        className="banner_icon banner_icon1 movingImgs"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img src={ImgA} title="" alt="" className="imageA" />
      </div>
      <div
        className="banner_icon banner_icon2 movingImgs "
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img src={ImgC} title="" alt="" className="imageA" />
      </div>
      <div
        className="banner_icon banner_icon3 movingImgs"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img src={ImgB} title="" alt="" className="imageA" />
      </div>
      {/* <div
        className="banner_icon banner_icon3 iijjhh"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img src={ImgD} title="" alt="" className="imageA" />
      </div> */}
    </div>
    </>
  );
};
export default HomeBanner;
