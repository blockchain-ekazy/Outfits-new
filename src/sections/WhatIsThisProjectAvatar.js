import React from 'react';

import H1 from '../Components/Imgs/H11.png'
import H2 from '../Components/Imgs/H22.png'
import H3 from '../Components/Imgs/H33.png'
import H4 from '../Components/Imgs/H44.png'
import H1A from '../Components/Imgs/H55.png'
import H2A from '../Components/Imgs/H66.png'
import H3A from '../Components/Imgs/H77.png'
import H4A from '../Components/Imgs/H88.png'


const WhatIsThisProjectAvatar = () => {
    return (
        <div className="home_bored_bunny pl-5 ml-5">
            <div className="home_bored_bunny_max">
                <div className="home_bored_bunny_flex">
                    <div className="home_bored_bunny_inner">
                        <div className="home_bored_bunny_img">
                            <img src={H1} title="" alt="" width="50%" className="hover_hide"/>
                                <img src={H1A} title="" alt="" width="50%" className="hover_show"/>
                        </div>
                    </div>
                    <div className="home_bored_bunny_inner">
                        <div className="home_bored_bunny_img">

                                <img src={H3} title="" alt="" width="50%" className="hover_hide"/>
                                <img src={H2} title="" alt="" width="50%" className="hover_show"/>
                        </div>
                    </div>
                    <div className="home_bored_bunny_inner">
                        <div className="home_bored_bunny_img">
                            
                        <img src={H3A} title="" alt="" width="50%" className="hover_hide"/>
                                <img src={H2A} title="" alt="" width="50%" className="hover_show"/>
                        </div>
                    </div>
                    <div className="home_bored_bunny_inner">
                        <div className="home_bored_bunny_img">
                            <img src={H4} title="" alt="" width="50%" className="hover_hide"/>
                                <img src={H4A} title="" alt="" width="50%" className="hover_show"/>
                        </div>
                    </div>
                </div>
                <div className="home_bored_text " data-aos="fade-up" data-aos-duration="1000">
                    <h3 className=''> <span className='Worlddd'> World </span>Of Outfits</h3>
                </div>
            </div>
        </div>
    );
}
export default WhatIsThisProjectAvatar;

