import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainHeader from "./headers/MainHeader";
import MobileHeader from "./headers/MobileHeader";
import HomeBanner from "./sections/HomeBanner";
import AboutProject from "./sections/AboutProject";
import AboutProjectB from "./sections/AboutProjectB";
import AboutProjectC from "./sections/AboutProjectC";
import WhatIsThisProjectAvatar from "./sections/WhatIsThisProjectAvatar";
import SpecialItems from "./sections/SpecialItems";
import SpecialItems2 from "./sections/SpecialItems2";
import SpecialItemsTow2 from "./sections/SpecialItemsTow2";
import FutureGoals from "./sections/FutureGoals";
import FAQ from "./sections/FAQ";
import Footer from "./footers/Footer";
import MeetTeam from "./sections/MeetTeam";

import MintOutfit from "./sections/Mint Outfit";

import MintButton from "./Components/MintBtn";
import { ToastContainer } from "react-toastify";

import Div from "../src/Components/Imgs/1x/4.png";
import MintButton_Extra from "./Components/MintBtn extra";

function App() {
  return (
    <>
      <MainHeader />
      <MobileHeader />

      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <HomeBanner />
                <AboutProject />
                <AboutProjectB />
                <AboutProjectC />
                <WhatIsThisProjectAvatar />

                {/* <ProjectBenefits/> */}
                <div
                  className="home_benifits_heading home_our_special_heading pt-5 "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="m-3 text-left" style={{ textAlign: "left" }}>
                    <h3 className="py-3 text-left">FEELING LUCKY?</h3>
                    <p
                      className="  mx-5 text-left"
                      style={{ fontSize: "23px" }}
                    >
                      Legendary outfit holders get a free 3d wearable of their
                      outfit for the metaverse as long as 25% of the initial
                      mint sells out. Costume outfit holders get a 3d wearable
                      if 50% of the mint sells out. Legendary and Costume
                      outfits are the rarest in the collection. Hope you get
                      one!
                    </p>
                  </div>

                  <a id="Body"></a>
                  <h3 className="pt-3" style={{ fontSize: "50px" }}>
                    <em> Legendary</em> Collection
                  </h3>
                  <p className="m-0">
                    Discover Our 10 Legendary Outfits - They Are The Rarest.
                    <br />
                    {/* If you land one of them, you will receive an actual wearable of this
          outfit for the metaverse that you can wear. */}
                  </p>
                </div>
                <div className="Pink" style={{ position: "relative" }}>
                  <SpecialItems />
                  <SpecialItems2 />

                  <SpecialItemsTow2 />
                </div>
                <div className="Div">
                  <img className=" w-100" src={Div}></img>
                </div>
                <FutureGoals />
                <MeetTeam />
                <FAQ />
              </>
            }
          />
          <Route exact path="/mint-outfit" element={<MintOutfit />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <ToastContainer autoClose={4000} hideProgressBar theme="colored" />
      <div
        class="modal fade"
        id="mintModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-body">
            <div class="modal-content LightBlue bg-overlay">
              <button
                type="button"
                class="close text-right mr-1"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <MintButton />
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="mint-extra-Modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-md" role="document">
          <div class="modal-body">
            <div class="modal-content LightBlue bg-overlay">
              <button
                type="button"
                class="close text-right mr-1"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <MintButton_Extra />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
