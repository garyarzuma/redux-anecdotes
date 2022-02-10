
import React from 'react'
import { useDispatch } from 'react-redux'
import {addAnecdote} from '../reducers/anecdoteReducer'

const AnedecdoteForm = () => {
    const dispatch = useDispatch()
    
    const add_Anecdote = (event) => {
        event.preventDefault()
        dispatch(addAnecdote(event.target.anecdote.value))
        event.target.anecdote.value = ''
    }


  return (
    <div >
      <h2>create new</h2>
      <form onSubmit={add_Anecdote}>
        <input name="anecdote"/>
        <button type = "submit">create</button>
      </form>
    </div>
  )
}

export default AnedecdoteForm