const initialState = {
  number: 3,
  list: []
}

const incrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      state.number += 1
      return { ...state }
    }
    case 'LOAD_LIST': {
      const list = action.payload
      return {
        ...state,
        list
      }
    }
    default:
      return state;
  }
}

export default incrementReducer