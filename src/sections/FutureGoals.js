import React from "react";

import Img from "../Components/Imgs/FG.jpeg";
import Img2 from "../Components/Imgs/FG2.png";

import BIA from "../Components/Imgs/A.png";
import BIB from "../Components/Imgs/B.png";
import BIC from "../Components/Imgs/F3.png";
import BID from "../Components/Imgs/Picture2-removebg-preview.png";


// import ImgG from "../Components/Imgs/H2.PNG";

const FutureGoals = () => {
  return (
    <div className="Blue">
      <div className="container text-white pt-5">
        <div className="home_road_map_heading text-center">
          <a id="goals"></a>
          <h3>
            <em>Mission </em>+ Future
          </h3>
          <p>We are hard at work to manifest the following:</p>
        </div>

        {/* <Fade left> */}
        <div className="row align-items-center">
          <div className="col-md-4">
            <img
              src={Img}
              className=" m-auto d-none d-sm-block"
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
                  {/* <h3 className="RDH">
                    {" "}
                    <strong>One</strong>
                  </h3> */}
                  <p className="p-2 m-0">
                    <strong>ADDING ADDITIONAL COLLECTIONS</strong>
                    <br />
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-6">
                          We are building bodies and outfits for other
                          collections including World of Women Galaxy, Boss
                          Beauties, and Fame Lady Squad.
                        </div>
                        <div className="col-6">
                          <img className="w-25" src={BIA}></img>
                          <img className="w-25" src={BIB}></img>
                          <img className="w-25" src={BIC}></img>
                        </div>
                        {/* <div className="col-3 m-0 p-0">

                            </div> */}
                      </div>
                    </div>
                  </p>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  {/* <p class="timeline-event-thumbnail">
                    <i class="fa-solid fa-dice-two"></i>
                  </p> */}
                  {/* <h3 className="RDH">
                    {" "}
                  </h3> */}
                  <strong>DESIGNER COLLABS</strong>
                  <p className="p-3 m-0">
                    We are working with emerging apparel designers to add
                    additional traits/layers into our system to allow for more
                    outfit options. Do you own an apparel brand? Or an accessory
                    or jewelry company? Do you want to add your products into
                    the next WoO collection? Contact us.
                  </p>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  {/* <p class="timeline-event-thumbnail">
                    <i class="fa-solid fa-dice-three"></i>
                  </p> */}
                  {/* <h3 className="RDH">
                    {" "}
                  </h3> */}
                  <strong>USER DRIVEN OUTFITS</strong>
                  <p className="p-3 m-0">
                    We are building an interface where users will be able to
                    select whatever trait/outfit they desire and to then mint
                    that custom outfit onto their WoW or other PFP.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-8">
            <ul class="timeline my-5">
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  {/* <p class="timeline-event-thumbnail">
                    <i class="fa-solid fa-dice-one"></i>
                  </p> */}
                  {/* <h3 className="RDH">
                    {" "}
                    <strong>One</strong>
                  </h3> */}

                  <div className="container">
                    <div className="row">
                      <div className="col-8">

                  <p className="p-2 m-0">
                    <strong>ABILITY TO MINT OTHER BODY TYPES </strong>
                    <br />
                    We want to add the ability for a user to mint different body
                    types so we create a more diverse and realistic set of
                    bodies.
                  </p>
                      </div>
                      <div className="col-4">
                      <img className="w-75" src={BID}></img>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <strong>
                    ABILITY TO MINT 3D WEARABLES BASED ON YOUR OUTFIT
                  </strong>
                  <p className="p-3 m-0">
                    We want to give you a way to wear your outfit in the
                    metaverse. If you are lucky enough to mint a legendary
                    outfit you will receive a 3d wearable for free if the
                    project sells out. Other holders will have the ability to
                    mint a 3d wearable for use in Decentraland too.
                  </p>
                </div>
              </li>
              <li class="timeline-event">
                {/* <label class="timeline-event-icon"></label> */}
                <div class="timeline-event-copy">
                  {/* <strong>USER DRIVEN OUTFITS</strong> */}
                  <p className="p-3 m-0 font-weight-bold">
                    World of Outfits is creating a fashion platform that allows
                    end users and designers to collab and create endless looks
                    for the metaverse and IRL.
                    <br />
                    <br /> Owning a WoO is a ticket into this world of web3
                    fashion and metaverse apparel, accessories, and jewelry.
                    This is only the beginning.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <img
              src={Img2}
              className=" m-auto d-none d-sm-block"
              width="600px"
              title=""
              alt=""
            />
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
