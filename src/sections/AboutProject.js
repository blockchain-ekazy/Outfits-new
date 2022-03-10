import React from 'react';

import MCircle from '../Components/Imgs/Capture1-modified.png'
import Circle1 from '../Components/Imgs/Capture2-modified.png'
import Circle2 from '../Components/Imgs/Capture3-modified.png'
import Circle3 from '../Components/Imgs/Capture4-modified.png'

import Gif from '../Components/Imgs/BodyGif.gif'

const AboutProject = () => {
    return (
        <div className="home_what" id="intro">
            <div className="container ">
                
                <div className="home_welcome" data-aos="fade-up" data-aos-duration="1000">
                    <h3>Welcome to a project who is working hard to bring fashion to the metaverse.</h3>
                    <p>Claim a body for your World of Women.  Then mint an outfit for her to wear.
                    </p>
                    {/* <a href=""
                       className="btn"><span>VIEW ALL COLLECTION</span> <img src="img/btn_img3.png" title="" alt=""/></a> */}
                </div>
                <div className="what_flex row align-items-center">
                    <div className="what_inner">
                        <div className="what_inner_text visible-xs" data-aos="fade-up"
                             data-aos-duration="1000">
                            <h3><em>WHAT IS</em> world Of Outfits?</h3>
                        </div>
                        <div className="what_inner_img" data-aos="fade-right"
                             data-aos-duration="1000">
                            <img src={MCircle} width='350px'  title="" alt=""/>
                                <div className="round_icon round_icon1">
                                    <img src={Circle1} title="" alt=""/>
                                </div>
                                <div className="round_icon round_icon2">
                                    <img src={Circle2} title="" alt=""/>
                                </div>
                                <div className="round_icon round_icon3">
                                    <img src={Circle3} title="" alt=""/>
                                </div>
                        </div>
                    </div>
                    <div className="what_inner">
                        <div className="what_inner_text" data-aos="fade-left"
                             data-aos-duration="1000">
                            <h3 className="hidden-xs"><em>WHAT IS</em><br/>world Of Outfits?</h3>
                            <p>world Of Outfits is a collection of 4,999 unique 3D well-designed Bunnies united together to
                                get on the Ethereum Blockchain</p>
                            <p>Each world Of Outfits is unique and exclusive based on a hundred traits.<br/>The objective is
                                to build the strongest community and project around NFTs.</p>
                            <h4>
                                Entering into the world Of Outfits Community means joining a family full of investors and nft
                                enthusiasts who believe in the future of Cryptocurrencies and the blockchain technology.
                            </h4>
                            <div className="join_btn">
                                <a href="#Mint" className="btn"> 
                                {/* <img src="img/btn_img2.png" title="" alt=""/>  */}
                                <span>Mint Now</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutProject