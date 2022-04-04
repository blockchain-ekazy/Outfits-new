import React from "react";

import LogoIMg from "../Components/Imgs/MLogo.png";

function MobileHeader() {
  return (
    <>
      <header class="offcanvas-menu d-block d-md-none">
        <input type="checkbox" id="toogle-menu" />

        <label for="toogle-menu" class="toogle-open">
          <span></span>
        </label>

        <nav>
          
          <div>
            <img src={LogoIMg} className="w-50"></img>
            {/* <a className="Head" href="#">
              
              0X3LANDERS
            </a> */}
            <label for="toogle-menu" class="text-white toogle-close">
              <span className="text-white"></span>
            </label>
          </div>
          <ul className="LI">
            <li>
            <a href="#home" className="NavTxtLeft">HOME</a>
            </li>
            <li>
            <a href="#intro" className="NavTxtLeft">What is WoO?</a>
            </li>
            <li>
            <a href="#benefits" className="NavTxtLeft">Claim Body</a>
            </li>
            <li>
            <a href="#faq" className="NavTxtLeft">FAQ</a>
            </li>
            <li>
            <a href="#roadmap" className="NavTxtRight">Mint Outfit</a>
            </li>
            <li>
            <a href="#goals" className="NavTxtRight">Mission+ Future</a>
            </li>
            <li>
            <a href="#team" className="NavTxtRight">Allstar Team</a>
            </li>
            <li>
              <a href="" target="blank">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </nav>
        <div className="ml-auto">
            <img
              src={LogoIMg}
              style={{ marginLeft: "auto" }}
              className="d-block w-50 p-2 "
              ></img>
          </div>
      </header>
    </>
    // <header className="mobile_header">
    //     <div className="container">
    //         <div className="mobile_header_flex">
    //             <div className="mobile_header_inner">
    //                 <div className="mobile_header_logo">
    //                     <a href="/" className="heder_logo">
    //                         <img src="img/unnamed.gif" className='Imggggg' alt="logo"/>
    //                     </a>
    //                 </div>
    //             </div>
    //             <div className="mobile_header_inner">
    //                 <ul>
    //                     {/* <li><a href="https://opensea.io/collection/bored-bunny--nft" className="btn">
    //                         <img
    //                         src="img/btn_img1.png" title="" alt=""></img>
    //                         Buy On Opensea</a></li> */}
    //                     <li><img src="img/mobile_menu.png" title="" alt=""/></li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    // </header>
  );
}

export default MobileHeader;
