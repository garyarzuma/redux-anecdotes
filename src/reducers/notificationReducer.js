//****************HELPER FUNCTIONS **************//

//****************ACTION FUNCTIONS **************//

export const setMessage = (message) => {
  return {
    type: 'NOTIFY',
    message
  }
}

//****************MAIN REDUCER **************//

const reducer = (state = 'Yo', action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'NOTIFY':
      return action.message
    default: 
      return state
  }
}

export default reducer