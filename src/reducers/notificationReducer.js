//****************HELPER FUNCTIONS **************//

//****************ACTION FUNCTIONS **************//

export const setMessage = (message) => {
  return {
    type: 'NOTIFY',
    message
  }
}


export const removeMessage = () => {
  return {
    type: 'REMOVE_NOTIFY',
  }
}

//****************MAIN REDUCER **************//

const reducer = (state = null, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'NOTIFY':
      return action.message
    case 'REMOVE_NOTIFY':
      return null
    default: 
      return state
  }
}

export default reducer