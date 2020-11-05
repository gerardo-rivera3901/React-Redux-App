import axios from'axios'
// export const ADD_TO_WISH_LIST = 'ADD_TO_WISH_LIST'
export const FETCH_GAMES_START = 'FETCH_GAMES_START'
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS'
export const FETCH_GAMES_FAILURE = 'FETCH_GAMES_FAILURE'

export const fetchGames = () => {
  return (dispatch) => {
    dispatch({type: FETCH_GAMES_START })
    axios.get('https://zelda-api.apius.cc/api/games')
      .then(res => {
        dispatch({ type: FETCH_GAMES_SUCCESS, payload: res.data.data})
      })
      .catch(err => {
        dispatch({ type: FETCH_GAMES_FAILURE, payload: err.message})
      })
  }
}