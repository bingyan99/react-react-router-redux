import axios from 'axios'

export function homeLoadList() {
  return (dispatch) => {
    return axios.get('/list.json')
      .then(res => {
        const { data: { list } } = res.data
        dispatch({ type: 'HOME_LOAD_LIST', payload: list });
      }).catch(err => {
        dispatch({ type: 'HOME_LOAD_ERR', payload: err });
      })
  };
}