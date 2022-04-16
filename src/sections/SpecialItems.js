import React from 'react';
import $ from 'jquery'; 

import H1 from '../Components/Imgs/1x/Full/BodyA.png'
import H2 from '../Components/Imgs/1x/Full/BodyB.png'
import H3 from '../Components/Imgs/1x/Full/BodyC.png'
import H4 from '../Components/Imgs/1x/Full/BodyD.png'
// import H1A from '../Components/Imgs/H1A.PNG'
// import H2A from '../Components/Imgs/H2A.PNG'
// import H3A from '../Components/Imgs/H3A.PNG'
// import H4A from '../Components/Imgs/H4A.PNG'

const SpecialItems = () => {
    //   $(document).ready(function() {
    //     $('.home_our_special_flexB').slick({
    //       dots: false,
    //       arrows:false,
    //       infinite: true,
    //       //centerMode: true,
    //       //centerPadding: '95px',
    //       speed: 500,
    //       slidesToShow: 5,
    //       slidesToScroll: 1,
    //       responsive: [{
    //         breakpoint: 1199,
    //         settings: {
    //           slidesToShow: 4,
    //           slidesToScroll: 1,
    //           //centerMode: true,
    //           //centerPadding: '50px',
    //         }
    //       },{
    //         breakpoint: 991,
    //         settings: {
    //           slidesToShow: 4,
    //           slidesToScroll: 1,
    //           //centerMode: true,
    //           //centerPadding: '50px',
    //         }
    //       },{
    //         breakpoint: 768,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 1,
    //           arrows:false,
    //           dots: false,
    //           //centerMode: false,
    //           //centerPadding: '95px',
    //         }
    //       }, {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //           arrows:false,
    //           dots: false,
    //           //centerMode: false,
    //           //centerPadding: '95px',
    //         }
    //       }]
    //     });

    //     $('.home_meet_team_slider').slick({
    //       dots: false,
    //       arrows:true,
    //       infinite: true,
    //       centerMode: true,
    //       centerPadding: '95px',
    //       speed: 500,
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       responsive: [{
    //         breakpoint: 1199,
    //         settings: {
    //           slidesToShow: 4,
    //           slidesToScroll: 1,
    //           centerMode: true,
    //           centerPadding: '50px',
    //         }
    //       },{
    //         breakpoint: 991,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 1,
    //           centerMode: true,
    //           centerPadding: '50px',
    //         }
    //       },{
    //         breakpoint: 768,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 1,
    //           arrows:false,
    //           dots: true,
    //           centerMode: false,
    //           centerPadding: '95px',
    //         }
    //       }, {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 1,
    //           arrows:false,
    //           dots: true,
    //           centerMode: false,
    //           centerPadding: '95px',
    //         }
    //       }]
    //     });
    //   });
    return (
        <>

        
        
        <div className="home_our_special SliderA">
            <div className="container-JT">
             

                <div className="home_our_special_flex oldslider2 tthh " role="toolbar">
                    <div className="home_our_special_inner" tabIndex="-1"
                        role="option" aria-describedby="slick-slide00" style={{ width: 282 }}
                        data-slick-index="0" aria-hidden="false">
                        <div className="home_our_special_img">
                            <img src={H2} title="" alt="" />
                        </div>

                    </div>
                    <div className="home_our_special_inner slick-slide slick-active" tabIndex="-1" role="option"
                        aria-describedby="slick-slide01" style={{ width: 282 }} data-slick-index="1"
                        aria-hidden="false">
                        <div className="home_our_special_img">
                            <img src={H1} title="" alt="" />
                        </div>

                    </div>
                    <div className="home_our_special_inner slick-slide slick-active" tabIndex="-1" role="option"
                        aria-describedby="slick-slide02" style={{ width: 282 }} data-slick-index="2"
                        aria-hidden="false">
                        <div className="home_our_special_img">
                            <img src={H3} title="" alt="" />
                        </div>

                    </div>
                    <div className="home_our_special_inner slick-slide slick-active" tabIndex="-1" role="option"
                        aria-describedby="slick-slide03" style={{ width: 282 }} data-slick-index="3"
                        aria-hidden="false">
                        <div className="home_our_special_img">
                            <img src={H4} title="" alt="" />
                        </div>

                    </div>
                    <div className="home_our_special_inner slick-slide slick-active" tabIndex="-1" role="option"
                        aria-describedby="slick-slide04" style={{ width: 282 }} data-slick-index="4"
                        aria-hidden="false">
                        <div className="home_our_special_img">
                            <img src={H1} title="" alt="" />
                        </div>

                    </div>
                    <div className="home_our_special_inner slick-slide" tabIndex="-1" role="option"
                        aria-describedby="slick-slide05" style={{ width: 282 }} data-slick-index="5"
                        aria-hidden="true">
                        <div className="home_our_special_img">
                            <img src={H2} title="" alt="" />
                        </div>

                    </div>
                    <div className="home_our_special_inner slick-slide" tabIndex="-1" role="option"
                        aria-describedby="slick-slide06" style={{ width: 282 }} data-slick-index="6"
                        aria-hidden="true">
                        <div className="home_our_special_img">
                            <img src={H3} title="" alt="" />
                        </div>

                    </div>
                    <div className="home_our_special_inner slick-slide" tabIndex="-1" role="option"
                        aria-describedby="slick-slide07" style={{ width: 282 }} data-slick-index="7"
                        aria-hidden="true">
                        <div className="home_our_special_img">
                            <img src={H4} title="" alt="" />
                        </div>

                    </div>
                    <div className="home_our_special_inner slick-slide" tabIndex="-1" role="option"
                        aria-describedby="slick-slide08" style={{ width: 282 }} data-slick-index="8"
                        aria-hidden="true">
                        <div className="home_our_special_img">
                            <img src={H1} title="" alt="" />
                        </div>

                    </div>
                    <div className="home_our_special_inner slick-slide" tabIndex="-1" role="option"
                        aria-describedby="slick-slide09" style={{ width: 282 }} data-slick-index="9"
                        aria-hidden="true">
                        <div className="home_our_special_img">
                            <img src={H2} title="" alt="" />
                        </div>

                    </div>
                </div>

            </div>


        </div>
        </>

    );
}

export default SpecialItems