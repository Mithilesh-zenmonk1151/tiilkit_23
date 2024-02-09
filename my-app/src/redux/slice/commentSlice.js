import  {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from 'axios'

const initialState= {
    comments:[],
    isLoading:false,
    error:null,
}
export const fetchComment=  createAsyncThunk(
    'comment/fetchComment',
    async (postid)=>{
        console.log(postid)
        const res= await axios (`https://jsonplaceholder.typicode.com/comments?postId=${postid}`);
        console.log(" comment api is working");
        const data= await res.data
        return data
    }
)

export const commentSlice= createSlice(
    {
        name:'comment',
        initialState,
        reducers:[],
        extraReducers:(builder)=>{
            builder.addCase(fetchComment.pending,(state)=>{
                state.isLoading=true
            })
           
            builder.addCase(fetchComment.fulfilled, (state, action)=> {
                state.isLoading = false;
                const arr = action.payload;
                const postId = arr[0].postId;
                const obj = {[postId] : arr};
                console.log(obj);
                state.comments[postId] = arr;
                
            })
    
            builder.addCase(fetchComment.rejected,(state,action)=>{
                state.isLoading=action.error.message
            })

        }

    }
)
    export default commentSlice.reducer