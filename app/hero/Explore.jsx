import Image from "next/image";
import React from "react";
import explore from "../assets/explore.webp";
import Button from "../components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
function Explore() {
  return (
    <div className="main relative min-h-[400px]  ">
      <Image src={explore} alt="" className="cover  " placeholder="blur" />
      <div className="cover bg-black bg-opacity-40" />
      <div className="relative flex flex-col gap-2 items-center z-40 ">
        <h1 className="text-[40px] text-white font-bold ">Equipment Gallery</h1>
        <p className="text-white text-center sm:w-[500px] ">
          Have a look at modern day equipment we make use of here at Gani-Ola
          Engineering Services ltd.
        </p>
        <button className="px-8 flex mt-8 gap-2 text-[20px] py-3 rounded-md text-white font-medium bg-primary ">
          Explore <FaArrowRightLong size={30} />
        </button>
      </div>
    </div>
  );
}

export default Explore;
