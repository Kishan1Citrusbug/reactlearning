
import { createSlice } from '@reduxjs/toolkit'


export const fetchReducer = createSlice({
    name:"fetchreducer",
    initialState:{
        loading:true,
        error:'',
        data:null
      },
      reducers:{
        FETCH_SUCCESS:(state,action)=>{
            state.loading = false
            state.error = ''
            state.data =action.data
        },
        FETCH_ERROR:(state)=>{
            state.loading = false
            state.error = 'something went wrong'
            state.data =null
        },
        
      },
      
})

export const selectfunc = state => state.data;
export const { FETCH_SUCCESS, FETCH_ERROR } = fetchReducer.actions
export default fetchReducer.reducer