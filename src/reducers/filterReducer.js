
//****************HELPER FUNCTIONS **************//


//****************ACTION FUNCTIONS **************//

export const filterChange = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
}

//****************MAIN REDUCER **************//

const reducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return action.filter
    default: 
      return state
  }
}

export default reducer