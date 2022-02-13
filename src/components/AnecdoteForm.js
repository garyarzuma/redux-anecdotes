
import React from 'react'
import { useDispatch } from 'react-redux'
import {addAnecdotes} from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnedecdoteForm = () => {
    const dispatch = useDispatch()
    
    const add_Anecdote = async (event) => {
        event.preventDefault()
        const anecdoteText = event.target.anecdote.value
        dispatch(addAnecdotes(anecdoteText))
        event.target.anecdote.value = ''
    
        const message = `You added anecdote "${anecdoteText}".`
        dispatch(setNotification(message,5))
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