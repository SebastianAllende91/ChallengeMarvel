import { TYPES } from "../actions/types";

const initialState = {
  series: [],
  serieSelect: {},
  loading: true,
};

const SeriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_SERIES:
      return {
        ...state,
        series: action.payload,
        loading: false,
      };
    case TYPES.GET_SERIE_ID:
      return {
        ...state,
        serieSelect: action.payload,
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

export default SeriesReducer;
