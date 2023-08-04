import React from "react";
import Delivery from "../images/delivery.png";
import HeroBg from "../images/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div
          className="flex items-center gap-2 justify-center bg-orange-100 
                    px-4 py-1 rounded-full"
        >
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div
            className=" w-8 h-8 bg-white rounded-full overflow-hidden 
                        drop-shadow-xl"
          >
            <img
              src={Delivery}
              className=" w-f h-full object- contain"
              alt="dilevery"
            />
          </div>
        </div>
        <p
          className=" text-[2.5rem] lg:text-[4.5rem] text-headingColor
                    font-bold tracking-wide"
        >
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            {" "}
            Your City
          </span>{" "}
        </p>
        <p className=" text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia velit
          inventore magnam laudantium. Alias iure amet porro praesentium, minima
          quibusdam animi blanditiis suscipit ratione iste qui autem eveniet?
          Cumque, saepe.
        </p>
        <button
          type="button"
          className=" bg-gradient-to-br from-orange-400
             to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg 
             hover:shadow-lg transition-all ease-in-out duration-100 "
        >
          Order Now
        </button>
      </div>

      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          alt="hero-bg"
          className=" h-420 w-full lg:w-auto lg:h-650
          ml-auto "
        />
        <div
          className=" w-full h-full  absolute top-0 left-0 flex items-center 
          justify-center gap-4 flex-wrap py-4 md:py-20 xl:max-w-[600px]"
        >
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl 
                flex items-center justify-center flex-col drop-shadow-lg"
              >
                <img
                  src={n.imgSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                  alt="I1"
                />
                <p
                  className="text-base lg:text-xl font-semibold text-textColor mt-2
                   lg:mt-4"
                >
                  {n.name}
                </p>
                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold 
                   my-1 lg:my-3">
                  {n.desc}
                </p>
                <p className="text-sm font-semibold text-headingColor ">
                  {" "}
                  <span className="text-xs text-red-600">$</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
