import React from "react";



import H1 from '../Components/Imgs/T1.PNG'
import H2 from '../Components/Imgs/T2.PNG'
import H3 from '../Components/Imgs/T3.PNG'
import H4 from '../Components/Imgs/T4.PNG'
import H1A from '../Components/Imgs/T5.PNG'
import H2A from '../Components/Imgs/T6.PNG'
import H3A from '../Components/Imgs/H3A.PNG'
import H4A from '../Components/Imgs/H4A.PNG'

const MeetTeam = () => {
    return (
        <div className="home_meet_team" id="team">
            <div className="home_meet_team_container">
                <div className="home_road_map_heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    <h3><em>MEET </em> THE TEAM</h3>
                    <p>The ones who are making everything happen.</p>
                </div>
                <div className="home_meet_team_slider">
                            <div className="home_meet_team_inner slick-slide slick-active" tabIndex="-1" role="option"
                                 aria-describedby="slick-slide01" style={{width: 282}} data-slick-index="1"
                                 aria-hidden="true">
                                <div className="home_meet_team_img">
                                    <img src={H1} title="" alt="" width="100%"/>
                                </div>
                                <div className="home_meet_team_text">
                                    <h3>Visionary</h3>
                                    {/* <h4>CO-FOUNDER</h4> */}
                                </div>
                            </div>
                            <div className="home_meet_team_inner  slick-slide slick-active" tabIndex="0" role="option"
                                 aria-describedby="slick-slide02" style={{width: 282}} data-slick-index="2"
                                 aria-hidden="true">
                                <div className="home_meet_team_img">
                                    <img src={H2} title="" alt="" width="100%"/>
                                </div>
                                <div className="home_meet_team_text">
                                    <h3>Jelena</h3>
                                    {/* <h4>BLOCKCHAIN EXPERT</h4> */}
                                </div>
                            </div>
                            <div className="home_meet_team_inner  slick-slide slick-active" tabIndex="2" role="option"
                                 aria-describedby="slick-slide03" style={{width: 282}} data-slick-index="3"
                                 aria-hidden="true">
                                <div className="home_meet_team_img">
                                    <img src={H3} title="" alt="" width="100%"/>
                                </div>
                                <div className="home_meet_team_text">
                                    <h3>Dreamer</h3>
                                    {/* <h4>DESIGNER</h4> */}
                                </div>
                            </div>
                            <div className="home_meet_team_inner  slick-slide slick-active"tabIndex="3" role="option"
                                 aria-describedby="slick-slide04" style={{width: 282}} data-slick-index="4"
                                 aria-hidden="true">
                                <div className="home_meet_team_img">
                                    <img src={H4} title="" alt="" width="100%"/>
                                </div>
                                <div className="home_meet_team_text">
                                    <h3>Collab</h3>
                                    {/* <h4>DESIGNER</h4> */}
                                </div>
                            </div>
                            <div className="home_meet_team_inner  slick-slide slick-active" tabIndex="4" role="option"
                                 aria-describedby="slick-slide05" style={{width: 282}} data-slick-index="5"
                                 aria-hidden="true">
                                <div className="home_meet_team_img">
                                    <img src={H1A} title="" alt="" width="100%"/>
                                </div>
                                <div className="home_meet_team_text">
                                    <h3>sabirpro</h3>
                                    <h4>Developer</h4>
                                </div>
                            </div>
                            <div className="home_meet_team_inner  slick-slide slick-active" tabIndex="5" role="option"
                                 aria-describedby="slick-slide06" style={{width: 282}} data-slick-index="6"
                                 aria-hidden="true">
                                <div className="home_meet_team_img">
                                    <img src={H2A} title="" alt="" width="100%"/>
                                </div>
                                <div className="home_meet_team_text">
                                    <h3>Robyan</h3>
                                    {/* <h4>CO-FOUNDER</h4> */}
                                </div>
                            </div>
                </div>
            </div>
        </div>
    );
}
export default MeetTeam;