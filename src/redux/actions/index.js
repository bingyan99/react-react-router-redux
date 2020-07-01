import axios from 'axios'

export const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

export function loadList() {
  return (dispatch) => {
    return axios.get('/list.json')
      .then(res => {
        const { data: { list } } = res.data
        dispatch({ type: 'LOAD_LIST', payload: list });
      }).catch(err => {
        dispatch({ type: 'LOAD_ERR', payload: err });
      })
  };
}