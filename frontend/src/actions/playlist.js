import axios from "axios";

import { GET_PLAYLIST } from "./types";

//Get Playlist
export const getPlaylists = () => dispatch => {
	axios
	.get("/api/salalem/Artists/")
	.then(res => {
		dispatch({
			type: GET_PLAYLIST,
			payload: res.data
		});
	})
	.catch(err => console.log(e));
};


//any action need seperate file as js 