import { TYPES } from "../actions/types";

const initialState = {
  loading: true,
  personajes: [],
  personajeSelect: {},
  personajesFilter: [],
};

const CharactersReducers = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_CHARACTERS:
      return {
        ...state,
        personajes: action.payload,
        loading: false,
      };
    case TYPES.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GET_CHARACTER_ID:
      return {
        ...state,
        personajeSelect: action.payload,
        loading: false,
      };
    case TYPES.GET_CHARACTER_NAME:
      return {
        ...state,
        // personajesFilter: action.payload,
        personajes: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default CharactersReducers;
