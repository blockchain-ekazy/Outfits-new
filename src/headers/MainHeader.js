import React from "react";
import "./MainHEader.css";
import $ from "jquery";
// import $ from 'jquery';

import Logo from "../Components/Imgs/Logo.png";

function MainHeader() {
  $(document).ready(function () {
    /** ===========================================
            Hide / show the master navigation menu
        ============================================ */

    // console.log('Window Height is: ' + $(window).height());
    // console.log('Document Height is: ' + $(document).height());

    console.log("Window Height is: " + $(window).height());
    console.log("Document Height is: " + $(document).height());

    var previousScroll = 0;

    $(window).scroll(function () {
      var currentScroll = $(this).scrollTop();

      /*
              If the current scroll position is greater than 0 (the top) AND the current scroll position is less than the document height minus the window height (the bottom) run the navigation if/else statement.
            */
      if (
        currentScroll > 0 &&
        currentScroll < $(document).height() - $(window).height()
      ) {
        /*
                If the current scroll is greater than the previous scroll (i.e we're scrolling down the page), hide the nav.
              */
        if (currentScroll > previousScroll) {
          window.setTimeout(hideNav, 300);
          /*
                Else we are scrolling up (i.e the previous scroll is greater than the current scroll), so show the nav.
              */
        } else {
          window.setTimeout(showNav, 300);
        }
        /* 
                Set the previous scroll value equal to the current scroll.
              */
        previousScroll = currentScroll;
      }
    });

    function hideNav() {
      $("[data-nav-status='toggle']")
        .removeClass("is-visible")
        .addClass("is-hidden");
    }
    function showNav() {
      $("[data-nav-status='toggle']")
        .removeClass("is-hidden")
        .addClass("is-visible");
    }
  });

  return (
    <>
      <nav class="navigation-bar   is-visible " data-nav-status="toggle">
        <ul className="text-center">
          <li>
            <a href="#home " className="NavTxtLeft">HOME</a>
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
          <span className="h3"> 
            <img className="logoimg mx-3" style={{maxWidth :"300px"}} src={Logo}></img>
          </span>
          {/* <div> */}
            <li>
              <a href="#roadmap" className="NavTxtRight">Mint Outfit</a>
            </li>

            <li>
              <a href="#goals" className="NavTxtRight">Mission+ Future</a>
            </li>
            <li>
              <a href="#team" className="NavTxtRight">Allstar Team</a>
            </li>
          {/* </div> */}
        </ul>
      </nav>
    </>
    // <header className="header_main desktop_header">
    //     <div className="container">
    //         <div className="header_inner">
    //             <div className="header_flex">
    //                 <div className="header_menu header_menu1">
    //                     <ul>
    //                         <li><a href="#home">HOME</a></li>
    //                     <li><a href="#intro">What is WoO?</a></li>

    //                         <li><a href="#benefits">Claim Body</a></li>
    //                         <li><a href="#faq">FAQ</a></li>

    //                     </ul>
    //                 </div>
    //                 <div className="header_logo ">
    //                     <a href="/" className=" heder_logo">
    //                         <h1 className='text-white py-5'>World of Outfits</h1>
    //                         {/* <img src={OSeaImg} className=' p-0' width='150px' alt="logo"/> */}
    //                     </a>
    //                 </div>
    //                 <div className="header_menu header_menu2">
    //                     <ul>
    //                     <li><a href="#roadmap">Mint Outfit</a></li>

    //                         <li><a href="#goals">Mission+ Future</a></li>
    //                         <li><a href="#team">Allstar Team</a></li>
    //                         <li>
    //                             {/* <a href="https://opensea.io/collection/bored-bunny--nft" className="btn">
    //                                 <img src={OSeaImg} className='Limg ' title="" alt=""/>
    //                                 Buy On Opensea
    //                             </a> */}
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //             {/* <div className="social_menu">
    //                 <ul>
    //                     <li>
    //                         <a href="https://twitter.com/BoredBunnyNFT">
    //                             <img src="img/social1.png" title="" alt=""/>
    //                         </a>
    //                     </li>
    //                     <li>
    //                         <a href="https://discord.gg/boredbunny">
    //                             <img src="img/social2.png" title="" alt=""/>
    //                         </a>
    //                     </li>
    //                     <li>
    //                         <a href="https://opensea.io/collection/bored-bunny--nft">
    //                             <img src="img/social3.png" title="" alt=""/>
    //                         </a>
    //                     </li>
    //                     <li>
    //                         <a href="https://instagram.com/boredbunnynft">
    //                             <img src="img/social4.png" title="" alt=""/>
    //                         </a>
    //                     </li>
    //                 </ul>
    //             </div> */}
    //         </div>
    //     </div>
    // </header>
  );
}

export default MainHeader;
