import { createSlice } from '@reduxjs/toolkit'

//****************MAIN REDUCER **************//

const notificationSlice = createSlice({
  name:'notification',
  initialState:null,
  reducers: {
    setMessage(state,action){
      return action.payload
    },
    removeMessage(state,action){
      return null
    }
  }
})

export const { setMessage, removeMessage} = notificationSlice.actions
export default notificationSlice.reducer