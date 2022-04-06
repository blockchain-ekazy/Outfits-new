import React from "react";

import H1 from "../Components/Imgs/T1.PNG";
import H2 from "../Components/Imgs/Picture23.png";
import H3 from "../Components/Imgs/T3.PNG";
import H4 from "../Components/Imgs/T4.PNG";
import H1A from "../Components/Imgs/T5.PNG";
import H2A from "../Components/Imgs/T6.PNG";
// import H3A from '../Components/Imgs/H3A.PNG'
// import H4A from '../Components/Imgs/H4A.PNG'

const MeetTeam = () => {
  return (
    <>
      <a id="team"></a>
      <div className="container-fluid Pink  bg-overlay pt-3">
        <div
          className="home_road_map_heading aos-init aos-animate text-center pt-5 pb-2    "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3>
            <em>Meet </em> The Team
          </h3>
          <p>
            World of Outfits is a motley crew of blockchain technologists and
            fashion creatives. Meet our all-star team.
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-1"></div>
          <div className="col-md-4">
            <div className="my-2 ImgTeam bottom-rightTeam d -block mx-auto mx-md-5  buttonPinkTeam">
              <img className="" src={H1} title="" alt="" width="100%" />
            </div>
          </div>
          <div className="col-md-6 ">
            <h3 className="text-white font-weight-bold">
              Visionary <br />
              Gregory{" "}
            </h3>
            <p className="text-white fontpop" style={{ fontSize: "17px" }}>
              I've been in fashion and apparel for 20 years and wanted to create
              a digital platform to enable apparel, accessory, and jewelry
              brands to get into NFTs and the metaverse
            </p>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row align-items-center">
          <div className="col-1"></div>
          <div className="col-md-4">
            <div className="ImgTeam my-2 bottom-rightTeam d-block mx-auto mx-md-5  buttonPinkTeam">
              <img className="" src={H2} title="" alt="" width="100%" />
            </div>
          </div>
          <div className="col-md-6 ">
            <h3 className="text-white font-weight-bold">
              Head <br />
              Artist Jelena{" "}
            </h3>
            <p className="text-white fontpop" style={{ fontSize: "17px" }}>
              I am the head designer of this fashionable NFT trip. I live and
              breathe fashion and it has been a creative blast to create the
              traits and layers that will become the foundation for this game
              changing fashion NFT platform. I am also a handbag designer and
              some of my handbag designs will be in our collection!
            </p>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row align-items-center">
          <div className="col-1"></div>
          <div className="col-md-4">
            <div className="my-2 ImgTeam bottom-rightTeam d-block mx-auto mx-md-5  buttonPinkTeam">
              <img className="" src={H3} title="" alt="" width="100%" />
            </div>
          </div>
          <div className="col-md-6 ">
            <h3 className="text-white font-weight-bold">
              Developer <br /> Sabir{" "}
            </h3>
            <p className="text-white fontpop" style={{ fontSize: "17px" }}>
              My job is to make sure you get your NFT when you click mint! To be
              more serious, it’s a rather complex process to mix and match
              apparel and accessory layers to create a perfect collection of
              10,000 outfits. We are also building the next version of the
              platform already where you will be able to select and mint any
              trait desired and build your own custom outfit
            </p>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row align-items-center">
          <div className="col-1"></div>
          <div className="col-md-4">
            <div className="my-2 ImgTeam  bottom-rightTeam d-block mx-auto mx-md-5  buttonPinkTeam">
              <img className="" src={H4} title="" alt="" width="100%" />
            </div>
          </div>
          <div className="col-md-6 ">
            <h3 className="text-white font-weight-bold">
              Collab <br /> Director of Partnerships Ethan
            </h3>
            <p className="text-white fontpop" style={{ fontSize: "17px" }}>
              I am speaking with apparel, accessory, and jewelry brands who want
              to place their 2D designs into the WoO collection along with
              helping these brands create 3d digital wearables for the metaverse
              specifically Decentraland. If you want to include your designs for
              a future WoO drop, get in touch with us on twitter.
            </p>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row align-items-center">
          <div className="col-1"></div>
          <div className="col-md-4">
            <div className="my-2 ImgTeam bottom-rightTeam d-block mx-auto mx-md-5  buttonPinkTeam">
              <img className="" src={H1A} title="" alt="" width="100%" />
            </div>
          </div>
          <div className="col-md-6 ">
            <h3 className="text-white font-weight-bold">
              Dreamer <br />
              Incubator Anon{" "}
            </h3>
            <p className="text-white fontpop" style={{ fontSize: "17px" }}>
              My job is to dream big and find talented passionate people
            </p>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row align-items-center">
          <div className="col-1"></div>
          <div className="col-md-4">
            <div className="my-2 ImgTeam bottom-rightTeam d-block mx-auto mx-md-5  buttonPinkTeam">
              <img className="" src={H2A} title="" alt="" width="100%" />
            </div>
          </div>
          <div className="col-md-6 ">
            <h3 className="text-white font-weight-bold">
              Metaverse <br /> Wearables Director Robyn{" "}
            </h3>
            <p className="text-white fontpop" style={{ fontSize: "17px" }}>
              My job is to bridge our 2d apparel, accessory, and jewelry designs
              into the 3d world of the metaverse. The future is digital and we
              will be helping you dress for it. :)
            </p>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
    // <div className="home_meet_team" id="team">
    //     <div className="home_meet_team_container">
    //         <div className="home_road_map_heading aos-init aos-animate pl-5" data-aos="fade-up" data-aos-duration="1000">
    //             <h3><em>Meet </em> The Team</h3>
    //             <p>World of Outfits is a motley crew of blockchain technologists and fashion creatives. Meet our all-star team.</p>
    //         </div>
    //         <div className="home_meet_team_slider">
    //                     <div className="home_meet_team_inner slick-slide slick-active" tabIndex="-1" role="option"
    //                          aria-describedby="slick-slide01" style={{width: 282}} data-slick-index="1"
    //                          aria-hidden="true">
    //                         <div className="home_meet_team_img">
    //                             <img src={H1} title="" alt="" width="100%"/>
    //                         </div>
    //                         <div className="home_meet_team_text">
    //                             <h3>Visionary</h3>
    //                             {/* <h4>CO-FOUNDER</h4> */}
    //                         </div>
    //                     </div>
    //                     <div className="home_meet_team_inner  slick-slide slick-active" tabIndex="0" role="option"
    //                          aria-describedby="slick-slide02" style={{width: 282}} data-slick-index="2"
    //                          aria-hidden="true">
    //                         <div className="home_meet_team_img">
    //                             <img src={H2} title="" alt="" width="100%"/>
    //                         </div>
    //                         <div className="home_meet_team_text">
    //                             <h3>Jelena</h3>
    //                             {/* <h4>BLOCKCHAIN EXPERT</h4> */}
    //                         </div>
    //                     </div>
    //                     <div className="home_meet_team_inner  slick-slide slick-active" tabIndex="2" role="option"
    //                          aria-describedby="slick-slide03" style={{width: 282}} data-slick-index="3"
    //                          aria-hidden="true">
    //                         <div className="home_meet_team_img">
    //                             <img src={H3} title="" alt="" width="100%"/>
    //                         </div>
    //                         <div className="home_meet_team_text">
    //                             <h3>Dreamer</h3>
    //                             {/* <h4>DESIGNER</h4> */}
    //                         </div>
    //                     </div>
    //                     <div className="home_meet_team_inner  slick-slide slick-active"tabIndex="3" role="option"
    //                          aria-describedby="slick-slide04" style={{width: 282}} data-slick-index="4"
    //                          aria-hidden="true">
    //                         <div className="home_meet_team_img">
    //                             <img src={H4} title="" alt="" width="100%"/>
    //                         </div>
    //                         <div className="home_meet_team_text">
    //                             <h3>Collab</h3>
    //                             {/* <h4>DESIGNER</h4> */}
    //                         </div>
    //                     </div>
    //                     <div className="home_meet_team_inner  slick-slide slick-active" tabIndex="4" role="option"
    //                          aria-describedby="slick-slide05" style={{width: 282}} data-slick-index="5"
    //                          aria-hidden="true">
    //                         <div className="home_meet_team_img">
    //                             <img src={H1A} title="" alt="" width="100%"/>
    //                         </div>
    //                         <div className="home_meet_team_text">
    //                             <h3>sabirpro</h3>
    //                             <h4>Developer</h4>
    //                         </div>
    //                     </div>
    //                     <div className="home_meet_team_inner  slick-slide slick-active" tabIndex="5" role="option"
    //                          aria-describedby="slick-slide06" style={{width: 282}} data-slick-index="6"
    //                          aria-hidden="true">
    //                         <div className="home_meet_team_img">
    //                             <img src={H2A} title="" alt="" width="100%"/>
    //                         </div>
    //                         <div className="home_meet_team_text">
    //                             <h3>Robyan</h3>
    //                             {/* <h4>CO-FOUNDER</h4> */}
    //                         </div>
    //                     </div>
    //         </div>
    //     </div>
    // </div>
  );
};
export default MeetTeam;
