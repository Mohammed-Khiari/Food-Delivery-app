import { fetchUser } from "../utils/fetchlocalStorageData";

const userInfo = fetchUser();

export const initialState = {
    user:userInfo,
};