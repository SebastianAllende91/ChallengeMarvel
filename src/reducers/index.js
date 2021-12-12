import { combineReducers } from "redux";
import PersonajesReducers from "./personajesReducer";
import ComicsReducer from "./comicsReducer";
import SeriesReducer from "./seriesReducer";
import StoriesReducer from "./storiesReducer";

const rootReducer = combineReducers({
  PersonajesReducers,
  ComicsReducer,
  SeriesReducer,
  StoriesReducer,
});

export default rootReducer;
