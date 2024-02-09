import {  configureStore} from "@reduxjs/toolkit";
import contentSlice from "../slice/contentSlice";
import commentSlice from "../slice/commentSlice";

export const store= configureStore({
    reducer:{
        content:contentSlice,
        comment:commentSlice,
    }
})