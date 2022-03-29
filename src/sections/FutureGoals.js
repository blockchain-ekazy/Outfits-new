import React from "react";

import Img from "../Components/Imgs/FG.jpeg";

// import ImgG from "../Components/Imgs/H2.PNG";

const FutureGoals = () => {
  return (
    <div className="Blue">
      <div className="container text-white pt-5">
        <div className="home_road_map_heading text-center">
          <a id="goals"></a>
          <h3>
            <em>Our Mission </em> + Future Goals
          </h3>
        </div>

        {/* <Fade left> */}
        <div className="row align-items-center">
          <div className="col-md-4">
            <img
              src={Img}
              className="d-block m-auto"
              width="200px"
              title=""
              alt=""
            />
          </div>
          <div className="col-md-8">
            <ul class="timeline my-5">
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  {/* <p class="timeline-event-thumbnail">
                    <i class="fa-solid fa-dice-one"></i>
                  </p> */}
                  <h3 className="RDH">
                    {" "}
                    <strong>One</strong>
                  </h3>
                  <p className="p-0 m-0">
                    {/* <strong>Schwerpunkt: Frontend-Entwicklung</strong>
                        <br /> */}
                    FUTURE GOALS + UTILITY WE ARE CREATING MORE THAN JUST A 2D
                    ILLUSTRATION OF A BODY AND OUTFIT. HERE IS WHAT WE ARE
                    BUILDING FOR THE FUTURE: 1. ALLOWING FASHION AND ACCESSORY
                    (HATS, BAGS, JEWELRY) DESIGNERS TO ADD THEIR DESIGNED ITEMS
                    INTO THE WORLD OF OUTFITS FUTURE COLLECTIONS. WANT TO PUT A
                    UNIQUE DRESS OR HANDBAG OR BRACELET THAT YOU DESIGNED INTO
                    WoO, DM US TO COLLAB.
                  </p>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  {/* <p class="timeline-event-thumbnail">
                    <i class="fa-solid fa-dice-two"></i>
                  </p> */}
                  <h3 className="RDH">
                    {" "}
                    <strong>Two</strong>
                  </h3>
                  <p className="p-0 m-0">
                    USERS WILL BE ABLE TO ACTUALLY SELECT WHAT
                    OUTFITS/TRAITS/LAYERS THEY WANT TO ADD TO THEIR BODY THUS
                    CREATING A CUSTOM LOOK ONTO THEIR PFP.
                  </p>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  {/* <p class="timeline-event-thumbnail">
                    <i class="fa-solid fa-dice-three"></i>
                  </p> */}
                  <h3 className="RDH">
                    {" "}
                    <strong>Three</strong>
                  </h3>
                  <p className="p-0 m-0">
                    WE ARE WORKING ON BUILDING DIFFERENT BODY TYPES SO YOU CAN
                    MINT DIFFERENT BODIES ONTO YOUR PFP. WE WANT A MORE DIVERSE
                    AND REALISTIC SET OF BODIES FOR THE ENDLESS OUTFIT OPTIONS
                    WE ARE CREATING. TO LAUNCH, WE HAVE CREATED ONE BODY TYPE AS
                    IT BECOMES A BIT COMPLEX TO CREATE OUTFITS ON MULTIPLE BODY
                    TYPES FOR THE INITIAL LAUNCH. BUT WE ARE WORKING ON IT!
                  </p>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                
                  <h3 className="RDH">
                    {" "}
                    <strong>Four</strong>
                  </h3>
                  <p className="p-0 m-0">
                    WE ARE BUILDING BODIES FOR A NUMBER OF POPULAR PFP
                    COLLECTIONS. WE ARE WORKING ON BOSS BEAUTIES AND FAME LADY
                    SQUAD NEXT. IS THERE ANOTHER PFP COLLECTION THAT YOU’D LIKE
                    TO SEE BODIES AND OUTFITS FOR? DM US.{" "}
                  </p>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  {/* <p class="timeline-event-thumbnail">
                    <i class="fa-solid fa-dice-three"></i>
                  </p> */}
                  <h3 className="RDH">
                    {" "}
                    <strong>Five</strong>
                  </h3>
                  <p className="p-0 m-0">
                    WoO is working with VR designers to create actual 3d
                    wearable versions of the outfits in our collection.
                    Ultimately the goal is for you to be able to mint a wearable
                    version of the outfit you received or designed on your own,
                    and then to mint a 3d wearable of the outfit. This will let
                    you stunt in the metaverse in a custom designed garment for
                    your PFP. 6. Our end goal is to create a creative fashion
                    platform that allows end users and designers to collab and
                    create endless looks for the metaverse and IRL.{" "}
                  </p>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  {/* <p class="timeline-event-thumbnail">
                    <i class="fa-solid fa-dice-three"></i>
                  </p> */}
                  <h3 className="RDH">
                    {" "}
                    <strong>Six</strong>
                  </h3>
                  <p className="p-0 m-0">
                    . Our futuristic reach goal is to get to a place where we
                    can take the digital blueprints of any of these outfits and
                    send to a cut & sew factory partner to then create real life
                    versions of any outfit that you dream up. We are not
                    promising goal 7! But this is where are fashion vision and
                    apparel dreams are headed. Welcome to the wild west of web3
                    fashion.{" "}
                  </p>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  {/* <p class="timeline-event-thumbnail">
                    <i class="fa-solid fa-dice-three"></i>
                  </p> */}
                  <h3 className="RDH">
                    {" "}
                    <strong>Seven</strong>
                  </h3>
                  <p className="p-0 m-0">3d sewing your garment and sending to you! Ok </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* </Fade> */}
      </div>
      {/* <div className="container-fluid Blue">
        <div className="home_road_map_heading">
          <a id="goals"></a>
          <h3>
            <em>Our Mission </em> + Future Goals
          </h3>
        </div>

        <div className="row align-items-center ">
          <div className="col-md-4 col-12 ">
            <div className="">
              <img
                src={Img}
                className="d-block m-auto"
                width="200px"
                title=""
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-8">
            <main>
              <ol class="gradient-list">
                <li>
                  {" "}
                  FUTURE GOALS + UTILITY WE ARE CREATING MORE THAN JUST A 2D
                  ILLUSTRATION OF A BODY AND OUTFIT. HERE IS WHAT WE ARE
                  BUILDING FOR THE FUTURE: 1. ALLOWING FASHION AND ACCESSORY
                  (HATS, BAGS, JEWELRY) DESIGNERS TO ADD THEIR DESIGNED ITEMS
                  INTO THE WORLD OF OUTFITS FUTURE COLLECTIONS. WANT TO PUT A
                  UNIQUE DRESS OR HANDBAG OR BRACELET THAT YOU DESIGNED INTO
                  WoO, DM US TO COLLAB.
                </li>

                <li>
                  USERS WILL BE ABLE TO ACTUALLY SELECT WHAT
                  OUTFITS/TRAITS/LAYERS THEY WANT TO ADD TO THEIR BODY THUS
                  CREATING A CUSTOM LOOK ONTO THEIR PFP.
                </li>
                <li>
                  WE ARE WORKING ON BUILDING DIFFERENT BODY TYPES SO YOU CAN
                  MINT DIFFERENT BODIES ONTO YOUR PFP. WE WANT A MORE DIVERSE
                  AND REALISTIC SET OF BODIES FOR THE ENDLESS OUTFIT OPTIONS WE
                  ARE CREATING. TO LAUNCH, WE HAVE CREATED ONE BODY TYPE AS IT
                  BECOMES A BIT COMPLEX TO CREATE OUTFITS ON MULTIPLE BODY TYPES
                  FOR THE INITIAL LAUNCH. BUT WE ARE WORKING ON IT!
                </li>
                <li>
                  WE ARE BUILDING BODIES FOR A NUMBER OF POPULAR PFP
                  COLLECTIONS. WE ARE WORKING ON BOSS BEAUTIES AND FAME LADY
                  SQUAD NEXT. IS THERE ANOTHER PFP COLLECTION THAT YOU’D LIKE TO
                  SEE BODIES AND OUTFITS FOR? DM US.
                </li>
                <li>
                  WoO is working with VR designers to create actual 3d wearable
                  versions of the outfits in our collection. Ultimately the goal
                  is for you to be able to mint a wearable version of the outfit
                  you received or designed on your own, and then to mint a 3d
                  wearable of the outfit. This will let you stunt in the
                  metaverse in a custom designed garment for your PFP. 6. Our
                  end goal is to create a creative fashion platform that allows
                  end users and designers to collab and create endless looks for
                  the metaverse and IRL.
                </li>
                <li>
                  . Our futuristic reach goal is to get to a place where we can
                  take the digital blueprints of any of these outfits and send
                  to a cut & sew factory partner to then create real life
                  versions of any outfit that you dream up. We are not promising
                  goal 7! But this is where are fashion vision and apparel
                  dreams are headed. Welcome to the wild west of web3 fashion.
                </li>
                <li> 3d sewing your garment and sending to you! Ok</li>
              </ol>
            </main>

            <ul class="s1 text-white "></ul>

            <div className="community_inner mt-4">
              <div className="row">
                <div className="col-12 col-md-3 ">
                  <button className="btn mx-md-0 mx-auto px-5  mb-3 ">
                    CLAIM BODY <br />
                    .02 eth + gas
                  </button>
                </div>
                <div className="col-12 col-md-3">
                  <button className="btn mx-md-0 px-5 mx-auto mb-3  ">
                    Mint Outfit <br />
                    .05 eth + gas
                  </button>
                </div>
               
              </div>
            
            </div>
        
          </div>
        </div>
      </div> */}
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
    </div>
  );
};

export default FutureGoals;
