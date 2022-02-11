
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {vote} from '../reducers/anecdoteReducer'
import { setMessage, removeMessage } from '../reducers/notificationReducer'

const AnedecdoteList = () => {

  const anecdotes = useSelector(state=>state.anecdotes)
  const filter = useSelector(state=>state.filter)
  const dispatch = useDispatch()

  const handleVote = (id,anecdoteText) => {
    dispatch(vote(id))

    const message = `You voted for "${anecdoteText}".`
    dispatch(setMessage(message))
    setTimeout( () => dispatch(removeMessage()), 5000)
  }

  return (
    <div>
        {filter}
        {anecdotes.filter(a => a.content.indexOf(filter)!== -1).sort((a,b)=>b.votes-a.votes).map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={()=>handleVote(anecdote.id,anecdote.content)}>vote</button>
            </div>
            </div>
        )}
    </div>
  )
}

export default AnedecdoteList