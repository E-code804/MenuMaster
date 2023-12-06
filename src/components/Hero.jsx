import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="flex mb-5 xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto items-center">
      <div className="flex-1 max-xl:pt-36 padding-x">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] max-sm:text-[48px] font-extrabold">
          Find the perfect restaurant for a great night out.
        </h1>

        <p className="text-[27px] max-sm:text-[24px] font-light mt-5">
          Discover new flavors catered to your tastes.
        </p>

        <button type="button" className="custom-btn hero-btn mt-10">
          <Link to="scrollTarget" smooth={true} duration={500}>
            Explore
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
