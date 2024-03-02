import React, { useEffect, useState } from "react";
import { RowContainer } from "./index";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";
import {motion} from "framer-motion"
import { useStateValue } from "../context/StateProvider";

const MenuContainer = ({ flag, data }, ref) => {
  const [filter, setfilter] = useState("chicken");
  const [{foodItems}, dispatch] = useStateValue()

  useEffect(() => {}, [filter]);

  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex felx-col items-center justify-center">
        <p
          className="text-2xl font-semibold capitalize text-headingColor relative
        before:absolute before:rounded-lg before:w-24 before:h-1 before:-bottom-2 before:left-0
        before:bg-gradient-to-tr from-orange-400 to-orange-600 mr-auto"
        >
          Our Hot Dishes
        </p>
      </div>
      <div
        className="w-full flex items-center justify-start lg:justify-center
      gap-8 py-6 overflow-x-scroll scrollbar-none"
      >
        {categories &&
          categories.map((category) => (
            <motion.div
              whileTap={{scale:0.9}}
              key={category.id}
              onClick={() => {setfilter(category.urlParmName)}}
              className={`group ${
                filter === category.urlParmName ? "bg-cartNumBg" : "bg-card"
              } w-24 min-w-[94px] h-28 cursor-pointer 
              rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center 
              hover:bg-cartNumBg`}
            >
              <div
                className={`w-10 h-10 rounded-full ${
                  filter === category.urlParmName ? "bg-card" : "bg-cartNumBg"
                } group-hover:bg-card flex items-center justify-center shadow-lg`}
              >
                <IoFastFood
                  className={`text-xl ${
                    filter === category.urlParmName
                      ? "text-textColor"
                      : "text-card"
                  } group-hover:text-textColor`}
                />
              </div>
              <p
                className={`"text-sm ${
                  filter === category.urlParmName
                    ? "text-white"
                    : "text-textColor"
                } text-textColor group-hover:text-white "`}
              >
                {category.name}
              </p>
            </motion.div>
          ))}
      </div>
      <div className="w-full ">
        <RowContainer 
        flag={false}
        data={foodItems?.filter(n => n.category == filter)}
        />
      </div>            

      
    </section>
  );
};

export default MenuContainer;
