
import React from 'react'
import { useDispatch } from 'react-redux'
import {addAnecdote} from '../reducers/anecdoteReducer'
import { setMessage, removeMessage } from '../reducers/notificationReducer'

const AnedecdoteForm = () => {
    const dispatch = useDispatch()
    
    const add_Anecdote = (event) => {
        event.preventDefault()
        const anecdoteText = event.target.anecdote.value
        dispatch(addAnecdote(anecdoteText))
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