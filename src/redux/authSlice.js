import { createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice({
  name: 'user',
  initialState: {
    uid: null,
  },
  reducers: {
    setUid: (state, action) => {
      console.log({ action })
      state.uid = action.payload
    },
    setBooks: (state, action) => {
      console.log({ action })
      state.books = action.payload
    },
    setBookInfo:(state,action)=>{
      console.log({ action })
      state.bookInfo = action.payload
    }
  },
})

export const { setUid,setBooks,setBookInfo } = userSlice.actions
export default userSlice.reducer
