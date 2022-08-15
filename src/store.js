import { configureStore,createSlice } from '@reduxjs/toolkit'

let select = createSlice({
    name : 'select',
    initialState : [],

    reducers:{
        add_select(state, a){
            let copy = [...state];
            copy.push(a);
            // console.log("copy: ",copy);
            return copy;
        },

        // set_select(state,a){
        //     return a;
        // }
    }
})
export let {add_select} = select.actions

export default configureStore({
  reducer: {
    select : select.reducer
   }
}) 