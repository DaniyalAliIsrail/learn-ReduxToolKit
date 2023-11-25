//! logic sara slice may hota hay
import { createSlice } from "@reduxjs/toolkit";
//??create silce 3 chez leta hay
//? 1) name , 2) Inital State 3) reducers
//*************************** */
//! <<< Initial state empty tha islye value dey deya or ab inital state k value 0 ho gaye >>>
const initialState = {value : 0}
export const showSlices = createSlice({
        name:"showData",
        initialState,
        reducers:{ 
                showData:(state)=>{
                        state.value = state.value
                },
                increment:(state)=>{
                        state.value = state.value + 1 
                },
                //action kay andr frontend say data ata hay js ko access action.payload say lety hay ..>>
                incrementbyValue:(state,action)=>{
                        state.value = state.value  + action.payload
                }
        }
})

//** reducer kay andr jo function hay usay ham action kehaty hay or us function matlb action ko showSlices.action kay andr export kary gay...>> 
export const {showData , increment , incrementbyValue} = showSlices.actions ;
//** yaha par ham nay pura reducer export keya hay>>  
export default showSlices.reducer;