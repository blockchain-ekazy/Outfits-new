import React from 'react';


import ImgG from '../Components/Imgs/H2.png'
const JoinCommunity = () => {
    return (
    <div className="home_community">
        <div className="container">
            <div className="home_road_map_heading pt-5">
                <h3 className='pt-5'><em>JOIN THE</em> COMMUNITY NOW</h3>
                <p>TOGETHER WE GOING TO BUILD THE BEST COMMUNITY IN THE NFT SPACE, LET'S SHOW THE WORLD HOW INFLUENT AND
                    ENGAGED WE ARE WE ARE GOING TO TAKE OVER THE METAVERSE AND NFT SPACE</p>
            </div>
            <div className="home_community_flex ">
                <div className="home_community_inner" data-aos="fade-right"
                     data-aos-duration="1000">
                    <div className="home_community_text">
                        <p>Together, let’s build the best exclusive club never seen before. Show to the world how strong
                            and influent we are. Let’s take over the Metaverse.</p>
                        <div className="community_flex">
                            {/* <div className="community_inner">
                                <a href="#" className="btn"> <img src="img/btn_img2.png" title="" alt=""/> <span>JOIN OUR DISCORD</span></a>
                            </div>
                            <div className="community_inner">
                                <a href="#" className="btn btn2"> <img src="img/icon6.png" title="" alt=""/> <span>FOLLOW US</span></a>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="home_community_inner" data-aos="fade-left"
                     data-aos-duration="1000">
                    <div className="home_community_img">
                        <img src={ImgG} width='600px' title="" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default JoinCommunity