import { TYPES } from "../actions/types";

const initialState = {
  stories: [],
  storieSelect: {},
  loading: true,
};

const StoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_STORIES:
      return {
        ...state,
        stories: action.payload,
        loading: false,
      };
    case TYPES.GET_STORIE_ID:
      return {
        ...state,
        storieSelect: action.payload,
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

export default StoriesReducer;
