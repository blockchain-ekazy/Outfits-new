import React from 'react';

import Img from '../Components/Imgs/FG.png'


import ImgG from '../Components/Imgs/H2.PNG'

const FutureGoals = () => {
    return (
        <div>

            <div className='container'>
                <div className="home_road_map_heading">
                    <h3><em>FUTURE</em> GOALS</h3>
                </div>

                <div className='row align-items-center '>

                    <div className='col-4 '>
                        <div className="">
                            <img src={Img} className='d-block m-auto' width='200px' title="" alt="" />
                        </div>
                    </div>
                    <div className='col-8'>
                        <p className='text-white h4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                            pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                            Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
                            in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
                            per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
                            vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
                            Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat
                            faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc.
                            Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis.
                            Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus,
                            non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>

                            <div className="community_inner">
                                        <a href="#Body" className="btn my-3"> 
                                        {/* <img src="img/btn_img2.png" title="" alt="" /> */}
                                         <span>CLAIM BODY</span></a>
                                    </div>
                                    <div className="community_inner">
                                        <a href="#" className="btn btn2">
                                             {/* <img src="img/icon6.png" title="" alt="" /> */}
                                              <span>MINT OUTFITS</span></a>
                                    </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <div className="home_road_map_heading">
                    <h3><em>FUTURE</em> GOALS</h3>
                  
                </div>
                
                <div className="home_community row">
                    <div className="home_community_img col-4">
                        <img src={Img} width='200px' title="" alt="" />
                    </div>
                    <div className="col-8 home_community_inner" data-aos="fade-left" data-aos-duration="1000">

                        <div className="home_community_inner" data-aos="fade-right"
                            data-aos-duration="1000">
                            <div className="home_community_text">
                                <p>Together, let’s build the best exclusive club never seen before. Show to the world how strong
                                    and influent we are. Let’s take over the Metaverse.</p>
                                <div className="community_flex">
                                    <div className="community_inner">
                                        <a href="#" className="btn"> <img src="img/btn_img2.png" title="" alt="" /> <span>JOIN OUR DISCORD</span></a>
                                    </div>
                                    <div className="community_inner">
                                        <a href="#" className="btn btn2"> <img src="img/icon6.png" title="" alt="" /> <span>FOLLOW US</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>);
}

export default FutureGoals