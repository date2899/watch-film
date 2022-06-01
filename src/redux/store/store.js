import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import { sliderReducer } from "../reducer/sliderReducer";
import { lastWhatReducer } from "../reducer/lastWhatReducer";

const rootReducer = combineReducers({
	slider: sliderReducer,
	lastWhat: lastWhatReducer,
});

export const store = createStore(rootReducer);
