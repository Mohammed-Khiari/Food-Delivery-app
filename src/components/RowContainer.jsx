import React, { forwardRef, useEffect, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../images/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";


const RowContainer = forwardRef(({ flag, data }, ref) => {
  const [{ cartItems }, dispatch] = useStateValue();

  const [items, setItems] = useState([]);

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };
  // add the clicked item to the card
  useEffect(() => {
    addToCart();
  }, [items]);
  

  
  const updateItems = (item) => {
    if (cartItems.length > 0) {
      // check if item elready exist in the cart item:
      if (
        cartItems.find((cartItem) => {
          return cartItem.id == item.id
        })
      ) {
      } else {
        setItems([...cartItems, item]);
      }

     
    } else {
      setItems([...cartItems, item]);
    }
  };

  return (
    <div
      ref={ref}
      className={`w-full my-12 flex items-center gap-4 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data?.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-300 min-w-[300px] md:w-340 md:min-w-[340px] bg-cardOverlay
             rounded-lg my-12 backdrop-blur-lg hover:drop-shadow-lg"
          >
            <div className="w-full flex items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item?.imageURL}
                className="w-40 h-[133px] object-contain -mt-8 drop-shadow-2xl"
                alt=""
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                onClick={() => updateItems(item)}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center"
              >
                <MdShoppingBasket className="text-xl text-white cursor-pointer hover:shadow-md" />
              </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mb-1 text-sm text-gray-500">
                {item?.calories} Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">$</span>
                  {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-340" alt="Data Not Found image" />
          <p className="text-xl text-headingColor font-semibold my-4">
            Itemes Nof Available
          </p>
        </div>
      )}
    </div>
  );
});

export default RowContainer;
