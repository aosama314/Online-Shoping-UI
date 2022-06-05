import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";

import BannerOne from "../../../assets/banner-01.jpg";
import BannerTwo from "../../../assets/banner-02.jpg";
import BannerThree from "../../../assets/banner-03.jpg";

const fadeImages = [BannerOne, BannerTwo, BannerThree];

const fadeInProperties = {
  indicators: true,
  scale: 1.4,
  prevArrow: (
    <div style={{ marginRight: "-36px", backgroundColor: "#d33b33" }}>
      <NavigateBeforeRoundedIcon fontSize="large" sx={{ color: "white" }} />
    </div>
  ),
  nextArrow: (
    <div style={{ marginLeft: "-36px", backgroundColor: "#d33b33" }}>
      <NavigateNextRoundedIcon fontSize="large" sx={{ color: "white" }} />
    </div>
  ),
};

const ImageSlider = () => {
  return (
    <div>
      <div className="slide-container">
        <Fade {...fadeInProperties}>
          <div className="each-fade">
            <div>
              <img src={fadeImages[0]} />
            </div>
            <p>First Slide</p>
          </div>
          <div className="each-fade">
            <p>Second Slide</p>
            <div>
              <img src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[2]} />
            </div>
            <p>Third Slide</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ImageSlider;
