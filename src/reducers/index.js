import {FETCH_GAMES_START, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILURE} from '../actions'

const initialState = {
  wishList: [],
  gameData: [],
  isLoading: false,
  error: ''
}

export const zeldaReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_GAMES_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        gameData: action.payload
      }
    case FETCH_GAMES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}