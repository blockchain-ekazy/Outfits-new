import React from 'react';
import './MainHEader.css'

import OSeaImg from '../Components/Imgs/BtnImggg.png'

function MainHeader() {
    return (
        <header className="header_main desktop_header">
            <div className="container">
                <div className="header_inner">
                    <div className="header_flex">
                        <div className="header_menu header_menu1">
                            <ul>
                                <li><a href="#home">HOME</a></li>
                            <li><a href="#intro">What in the World</a></li>

                                <li><a href="#benefits">Claim Body</a></li>
                            </ul>
                        </div>
                        <div className="header_logo ">
                            <a href="/" className=" heder_logo">
                                <img src={OSeaImg} className=' p-0' width='150px' alt="logo"/>
                            </a>
                        </div>
                        <div className="header_menu header_menu2">
                            <ul>
                            <li><a href="#roadmap">Mint an Outfit</a></li>
                            
                                <li><a href="#goals">Goals + Utility</a></li>
                                <li><a href="#team">THE TEAM</a></li>
                                <li><a href="#faq">FAQ’S</a></li>
                                <li>
                                    {/* <a href="https://opensea.io/collection/bored-bunny--nft" className="btn">
                                        <img src={OSeaImg} className='Limg ' title="" alt=""/>
                                        Buy On Opensea
                                    </a> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="social_menu">
                        <ul>
                            <li>
                                <a href="https://twitter.com/BoredBunnyNFT">
                                    <img src="img/social1.png" title="" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="https://discord.gg/boredbunny">
                                    <img src="img/social2.png" title="" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="https://opensea.io/collection/bored-bunny--nft">
                                    <img src="img/social3.png" title="" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/boredbunnynft">
                                    <img src="img/social4.png" title="" alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </header>
    );
}

export default MainHeader;
