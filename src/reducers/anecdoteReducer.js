import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

//****************MAIN REDUCER **************//

const anecdoteSlice = createSlice({
  name:"anecdotes",
  initialState: [],
  reducers:{
    vote(state, action){
      const id = action.payload.id
      return state.map(anecdote => 
      anecdote.id !== id ? anecdote : action.payload
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

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const addAnecdotes = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch(addAnecdote(anecdote))
  }
}

export const voteThunk = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.addVote(anecdote)
    dispatch(vote(newAnecdote))
  }
}

export default anecdoteSlice.reducer