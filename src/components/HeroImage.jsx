import React from "react";
import food1 from "../assets/food1.jpg";

const HeroImage = ({ foodImg, styles }) => {
  const foods = {
    1: food1,
  };

  return (
    <img className={styles} width="300" src={foods[foodImg]} alt="hero-food" />
  );
};

export default HeroImage;
