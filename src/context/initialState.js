import { fetchCart, fetchUser } from "../utils/fetchlocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
  cartItems : cartInfo
};


/* I stopped 6:55 */ 