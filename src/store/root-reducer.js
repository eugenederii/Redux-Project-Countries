import { combineReducers } from "redux";

import { themeReducer } from "./theme/theme-reducer";
import { countriesReducers } from "./countries/countries-reducer";
import { controlsReducer } from "./controls/controls-reducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducers,
  controls: controlsReducer,
});
