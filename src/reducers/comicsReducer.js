import { TYPES } from "../actions/types";

const initialState = {
  comics: [],
  comicsSelect: {},
  loading: true,
};

const ComicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_COMICS:
      return {
        ...state,
        comics: action.payload,
        loading: false,
      };
    case TYPES.GET_COMIC_ID:
      return {
        ...state,
        comicsSelect: action.payload,
        loading: false,
      };
    case TYPES.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default ComicsReducer;
