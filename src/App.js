import logo from './logo.svg';
import './App.css';
import MainHeader from "./headers/MainHeader";
import MobileHeader from "./headers/MobileHeader";
import HomeBanner from "./sections/HomeBanner";
import AboutProject from "./sections/AboutProject";
import WhatIsThisProjectAvatar from "./sections/WhatIsThisProjectAvatar";
import ProjectBenefits from "./sections/ProjectBenifits";
import SpecialItems from "./sections/SpecialItems";
import SpecialItems2 from "./sections/SpecialItems2";
import RoadMap from "./sections/RoadMap";
import JoinCommunity from "./sections/JoinCommunity";
import FutureGoals from "./sections/FutureGoals";
import FAQ from "./sections/FAQ";
import Footer from "./footers/Footer";
import MeetTeam from "./sections/MeetTeam";

function App() {
  return (
    <>
      <MainHeader/>
      <MobileHeader/>
      <HomeBanner/>
      <AboutProject/>
      <WhatIsThisProjectAvatar/>
      {/* <ProjectBenefits/> */}
      <div className="home_benifits_heading home_our_special_heading pt-5" data-aos="fade-up"
                    data-aos-duration="1000">
                    <a id='Body'></a>
                    <h3>OUR SPECIAL <br /> LEGENDARY <br /> COLLECTION</h3>
                    <p>DISCOVER OUR 10 LEGENDARY  Outfits - THEY ARE THE RAREST</p>
                </div>
      <div className='' style={{position:"relative"}} >
     
      <SpecialItems/>
      <SpecialItems2/>
      </div>
      {/* <RoadMap/> */}
      {/* <JoinCommunity/> */}
      <FutureGoals/>
      <MeetTeam/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App;
