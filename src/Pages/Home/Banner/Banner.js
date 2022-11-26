import React from "react";

import img1 from "../../../assets/banner-img/headphone.png";
import img2 from "../../../assets/banner-img/tv.png";
import img3 from "../../../assets/banner-img/xbox.png";
import PrimaryButton from "../../../Components/PrimaryButton";
const Banner = () => {
  return (
    <div className="hero  bg-pink-100 mt-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={img1} alt=""
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Lattest products</h1>
          <p className="py-6 m-6">
            Enjoy your time by listening your favourite items.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
