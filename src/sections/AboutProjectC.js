import React from "react";

import Div from "../Components/Imgs/1x/3.png";
import H2 from "../Components/Imgs/1x/Full/BodyB.png";
import H3 from "../Components/Imgs/1x/Full/BodyC.png";
import H4 from "../Components/Imgs/1x/Full/BodyA.png";
import H1A from "../Components/Imgs/1x/Full/BodyD.png";
import H2A from "../Components/Imgs/1x/Full/BodyC.png";
import MCircle from "../Components/Imgs/Capture1-modified.png";
import Circle1 from "../Components/Imgs/Capture2-modified.png";
import Circle2 from "../Components/Imgs/Capture3-modified.png";
import Circle3 from "../Components/Imgs/Capture4-modified.png";

import Gif from "../Components/Imgs/BodyGif.gif";

const AboutProject = () => {
  var htmlCollection = document.getElementsByClassName("item");
  //getting elements by class name into an HTMLCollection

  var itemsId = Array.from(htmlCollection);
  //turning the HTMLcollection into an array for easier manipulation of the elements

  var sectionDeg = 360 / itemsId.length;
  //sectioning the (imaginary) circle into a number of section equalling the number of items
  //it can be used on more elements

  var radianSectionDeg = (sectionDeg * Math.PI * 2) / 360;
  //transforming from degrees into radians

  var radiusLength = 160;
  //the distance between the center of the circle to the element
  //edit this number to increase/decrease that distance

  for (var i = 0; i < itemsId.length; i++) {
    itemsId[i].style.top =
      radiusLength * Math.sin(radianSectionDeg * i - 1.5708) + "px";
    itemsId[i].style.left =
      radiusLength * Math.cos(radianSectionDeg * i - 1.5708) + "px";
  }
  //setting the top and left positions of each elemenent based on the following formula:
  //(x, y) = (r * cos(θ), r * sin(θ)) like this:
  //x = (r * cos(θ) => left
  //y = r * sin(θ) => top
  //1.5708 is a radian used put the first element on top - basically 90deg

  function makeATurn() {
    for (var i = 0; i < itemsId.length; i++) {
      itemsId[i].style.top =
        radiusLength * Math.sin(radianSectionDeg * i - 1.5708) + "px";
      itemsId[i].style.left =
        radiusLength * Math.cos(radianSectionDeg * i - 1.5708) + "px";
    }
  }
  //function used to set the new position of the elements

  function turnRight() {
    var holder = itemsId.pop();
    itemsId.unshift(holder);
    makeATurn();
  }

  function turnLeft() {
    var holder = itemsId.shift();
    itemsId.push(holder);
    makeATurn();
  }
  //we're moving the elements by changing their position in the array

  return (
    <>
    <div className="Div">
      <img src={Div}></img>
    </div>
    <div className="home_what Pink pt-0" id="intro">
      <div className="container">
        <div className="what_flex  row pt-5 align-items-center">
          <div className="what_inner text-center text-sm-left">
            <div
              className="what_inner_text visible-xs"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3>
                <em>Own</em>a WOW?
              </h3>
            </div>
            <div
              className="what_inner_text"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3 className="hidden-xs">
              Don't own a <em>WoW </em>    and still want to be part of World of <em>Outfits?</em><br></br>         
              </h3>
              <h5 className=" text-white">
              You can then mint one of our WoO heads connected to a body
               </h5>

              {/* <h3
                className=" font-weight-bold text-white "
                style={{ fontSize: "40px " }}
              >
                own a <em>wow</em>?
              </h3> */}

              {/* <h1 className="text-white text-sm-left text-center ddd"> </h1> */}

              <div>
                <button className="bottom-right mx-2 my-3 buttonBlue">
                  {" "}
                  Mint a Head + Blank Body<br/> .05 eth + gas
                </button>
              </div>

              {/* <a href="#Mint" className=" btn mx-md-0 mx-auto py-2 mt-3" >
                  <img src="img/btn_img2.png" title="" alt=""/> 
                  <span className="">
                   Claim  Body<br/>
                     .02 eth
                  </span>
                </a> */}
            </div>
            {/* <div
              className="what_inner_text visible-xs"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3>
                <em>Don't</em> own a WoW and still want to be part of World of
                Outfits
                <br />
                You can then mint one of our heads connected to a body
              </h3>
            </div> */}
            {/* <div
              className="what_inner_text asasc"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3 className="h5 hidden-xs">
                Don't own a <em>WoW</em> and still want to be part of World of
                Outfits?
              <br/><br/>
              You can then mint one of ourrs heads
              </h3>

              <div className=" py-5">
              <h1 className="text-white  text-sm-left text-center ">
                </h1>

                <a href="#Mint" className=" mx-md-0 mx-auto  btn px-5">
                  <span>
                  Mint a head and body <br/>
                   .05 eth + Gas
                  </span>
                </a>
              </div>
            </div> */}
          </div>
          <div className="what_inner align" >
            <ul className="UlAll d-block mx-auto">
              <li className="Licd">
                <a >
                  <img className="imgS" src={MCircle} />
                </a>
              </li>
              <li  className="Licd">
                <a >
                  <img className="imgS" src={Circle1} />
                </a>
              </li>
              <li  className="Licd">
                <a >
                  <img className="imgS" src={Circle2} />
                </a>
              </li>
              <li  className="Licd">
                <a >
                  <img className="imgS" src={Circle3} />
                </a>
              </li>
              <li  className="Licd">
                <a >
                  <img className="imgS" src={Circle1} />
                </a>
              </li>
              <li className="Licd">
                <a >
                  <img className="imgS" src={Circle1} />
                </a>
              </li>
            </ul>
          </div>


        </div>
      </div>
    </div>
    </>
  );
};

export default AboutProject;
