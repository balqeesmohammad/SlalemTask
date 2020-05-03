import axios from "axios";

import { GET_ALBUM } from "./types";

//Get Playlist
export const getAlbums = () => dispatch => {
	axios
	.get("/api/salalem/Albums/")
	.then(res => {
		dispatch({
			type: GET_ALBUM,
			payload: res.data
		});
	})
	.catch(err => console.log(e));
};


//any action need seperate file as js 