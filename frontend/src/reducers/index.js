import { combineReducers } from "redux";
import playlist from "./playlist";
import album from "./album";
import song from "./song";


export default combineReducers({
	playlist,
	album,
	song
});
