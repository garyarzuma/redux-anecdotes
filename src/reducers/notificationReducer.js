import { createSlice } from '@reduxjs/toolkit'

let timeoutIDs = []

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

//sets time in seconds
export const setNotification = (message, time) => {
  return dispatch => {
    dispatch(setMessage(message))
    timeoutIDs.forEach(timeoutID => clearTimeout(timeoutID))
    timeoutIDs = []
    const id = setTimeout(() => {
        dispatch(removeMessage())
      }
        , time*1000)
    timeoutIDs.push(id)
  }
}

export default notificationSlice.reducer