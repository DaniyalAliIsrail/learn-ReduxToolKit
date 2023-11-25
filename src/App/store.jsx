import { configureStore } from "@reduxjs/toolkit";
import  showData  from "../features/showslices";

//hamnay store banaya hay
export const  store = configureStore({
        // 1) reducer empty hay abhy
        //2) reducer may showData store kar deya gya hay ab
        reducer:{
                show:showData 
        }
})
