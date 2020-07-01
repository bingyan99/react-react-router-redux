const initialState = {
  homeList: []
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'HOME_LOAD_LIST': {
      const homeList = action.payload
      return {
        ...state,
        homeList
      }
    }

    default:
      return state;
  }
}

export default homeReducer