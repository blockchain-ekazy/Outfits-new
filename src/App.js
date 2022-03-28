import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./headers/MainHeader";
import MobileHeader from "./headers/MobileHeader";
import HomeBanner from "./sections/HomeBanner";
import AboutProject from "./sections/AboutProject";
import AboutProjectB from "./sections/AboutProjectB";
import AboutProjectC from "./sections/AboutProjectC";
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
      <MainHeader />
      <MobileHeader />
      <HomeBanner />
      <AboutProject />
      <AboutProjectB />
      <AboutProjectC />
      <WhatIsThisProjectAvatar />
      {/* <ProjectBenefits/> */}
      <div
        className="home_benifits_heading home_our_special_heading pt-5 mt-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <a id="Body"></a>
        <h3>Our Legendary Collection</h3>
        <p >Discover Our 10 Legendary Outfits - They Are The Rarest.<br/>If you land one of them, you will receive an actual wearable of this outfit for the metaverse that you can wear.</p>
      </div>
      <div className="" style={{ position: "relative" }}>
        <SpecialItems />
        <SpecialItems2 />
      </div>
      {/* <RoadMap/> */}
      {/* <JoinCommunity/> */}
      <FutureGoals />
      <MeetTeam />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
