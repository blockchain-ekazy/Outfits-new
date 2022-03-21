import React from 'react';


import OSeaImg from '../Components/Imgs/BtnImg.png'
import Img from '../Components/Imgs/Capture1-modified.png'



const Footer = () => {
    return (
        <footer className="footer_div">
            {/* <img src="img/footer_bg.png" title="" alt="" width="100%" className="hidden-xs"/> */}
                {/* <img src="img/footer_mob_banner.png" title="" alt="" width="100%" className="visible-xs"/> */}
                    <div className="footer_position py-5">
                        <div className="footer_position_flex">
                            <div className="footer_position_inner">
                                <div className="footer_position_inner_left">
                                    <h3>
                                        <em>JOIN</em><br/>
                                        World Of Outfits
                                    </h3>
                                    <p>Become a member of the strongest and fast growing <br/> NFTs community.</p>
                                    <div className="footer_btn_flex">
                                        <div className="footer_btn_inner">
                                            <a href="" className="btn"> 
                                            {/* <img src="img/btn_img2.png" title="" alt=""/>  */}
                                            <i class="fa-brands  fa-twitter mr-2 " ></i>
                                            <span>Twitter</span></a>
                                        </div>
                                        <div className="footer_btn_inner">
                                            <a href="" className="btn btn2"> 
                                            <img src="img/btn_img4.png" title="" alt=""/> 
                                            <span>OPEN SEA</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer_position_inner hidden-xs">
                                <div className="footer_position_logo">
                                    <a href="#home"><img src="img/unnamed.gif" className='Imggggg' width='250px'  title="" alt=""/></a>
                                </div>
                            </div>
                            <div className="footer_position_inner">
                                <div className="footer_position_inner_right">
                                    <h3>
                                        <em>MINT</em><br/>
                                        April 4
                                    </h3>
                                    <div className="footer_position_inner_ticket">
                                        <a href="https://opensea.io/collection/bored-bunny--nft" className="btn">
                                        <img src={OSeaImg} className='Limg ' title="" alt=""/>Buy On Opensea</a>
                                    </div>
                                </div>
                            </div>
                            <div className="footer_position_inner visible-xs">
                                <div className="footer_position_logo">
                                    <a href="/"><img src="img/unnamed.gif" className='Imggggg' title="" alt=""/></a>
                                </div>
                            </div>
                        </div>
                        <div className="footer_bottom_flex">
                            <div className="footer_bottom_inner visible-xs">
                                <div className="social_bottommenu">
                                    <ul>
                                        <li><a href="https://twitter.com/BoredBunnyNFT" target="blank"><img
                                            src="img/t.png" title="" alt=""/></a></li>
                                        <li><a href="http://discord.gg/boredbunny" target="blank"><img
                                            src="img/ttt.png" title="" alt=""/></a></li>
                                        <li><a href="https://bored-bunny.vercel.app/" target="blank"><img
                                            src="img/tt.png" title="" alt=""/></a></li>
                                        <li><a href="https://www.instagram.com/boredbunnynft/" target="blank"><img
                                            src="img/i.png" title="" alt=""/></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer_bottom_inner">
                                <h6>© 2021 World Of Outfits. ALL RIGHTS RESERVED</h6>
                            </div>
                            <div className="footer_bottom_inner hidden-xs">
                                <div className="social_bottommenu">
                                    <ul>
                                        <li><a href="https://twitter.com/BoredBunnyNFT" target="blank"><img
                                            src="img/t.png" title="" alt=""/></a></li>
                                        <li><a href="http://discord.gg/boredbunny" target="blank"><img
                                            src="img/ttt.png" title="" alt=""/></a></li>
                                        <li><a href="https://bored-bunny.vercel.app/" target="blank"><img
                                            src="img/tt.png" title="" alt=""/></a></li>
                                        <li><a href="https://www.instagram.com/boredbunnynft/" target="blank"><img
                                            src="img/i.png" title="" alt=""/></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer_bottom_inner">
                                <div className="footer_bottom_ul">
                                    <ul>
                                        <li><a href="#">PRIVACY POLICY</a></li>
                                        <li>|</li>
                                        <li><a href="#">TERM &amp; CONDITION</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
        </footer>);
}
    export default Footer;