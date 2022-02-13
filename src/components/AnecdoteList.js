
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {voteThunk} from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnedecdoteList = () => {

  const anecdotes = useSelector(state=>state.anecdotes)
  const filter = useSelector(state=>state.filter)
  const dispatch = useDispatch()

  const handleVote = (anecdote) => {

    dispatch(voteThunk(anecdote))

    const message = `You voted for "${anecdote.content}".`
    dispatch(setNotification(message,5))
  }

  return (
    <div>
        {anecdotes.filter(a => a.content.indexOf(filter)!== -1).sort((a,b)=>b.votes-a.votes).map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={()=>handleVote(anecdote)}>vote</button>
            </div>
            </div>
        )}
    </div>
  )
}

export default AnedecdoteList