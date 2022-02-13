
import React from 'react'
import { useDispatch } from 'react-redux'
import {addAnecdotes} from '../reducers/anecdoteReducer'
import { setMessage, removeMessage } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnedecdoteForm = () => {
    const dispatch = useDispatch()
    
    const add_Anecdote = async (event) => {
        event.preventDefault()
        const anecdoteText = event.target.anecdote.value
        dispatch(addAnecdotes(anecdoteText))
        event.target.anecdote.value = ''
        
        const message = `You added anecdote "${anecdoteText}".`
        dispatch(setMessage(message))
        setTimeout( () => dispatch(removeMessage()), 5000)
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