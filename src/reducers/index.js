import { combineReducers } from "redux";
import CharactersReducers from "./charactersReducer";
import ComicsReducer from "./comicsReducer";
import SeriesReducer from "./seriesReducer";
import StoriesReducer from "./storiesReducer";

const rootReducer = combineReducers({
  CharactersReducers,
  ComicsReducer,
  SeriesReducer,
  StoriesReducer,
});

export default rootReducer;
