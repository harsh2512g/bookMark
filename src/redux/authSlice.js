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
  },
})

export const { setUid } = userSlice.actions
export default userSlice.reducer
