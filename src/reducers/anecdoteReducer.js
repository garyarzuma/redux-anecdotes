import { createSlice } from '@reduxjs/toolkit'

//****************MAIN REDUCER **************//

const anecdoteSlice = createSlice({
  name:"anecdotes",
  initialState: [],
  reducers:{
    vote(state, action){
      const id = action.payload
      const anecdoteToChange = state.find(n=> n.id === id)
      const changedAnecdote = {
      ...anecdoteToChange, votes: anecdoteToChange.votes + 1
    }
      return state.map(anecdote => 
      anecdote.id !== id ? anecdote : changedAnecdote
      )
    },
    addAnecdote(state, action){
      state.push(action.payload)
    },
    setAnecdotes(state, action){
      return action.payload
    }
  },
})

export const { vote, addAnecdote, setAnecdotes} = anecdoteSlice.actions
export default anecdoteSlice.reducer