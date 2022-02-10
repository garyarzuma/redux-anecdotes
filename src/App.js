import React from 'react'
import AnedecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
  
  return (
    <div>
      <AnecdoteList />
      <AnedecdoteForm />
    </div>
  )
}

export default App