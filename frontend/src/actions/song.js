// import axios from "axios";

// import { GET_SONG } from "./types";

// //Get Playlist /fetch api
// export const getSongs = () => dispatch => {
// 	axios
// 	.get("/api/salalem/Songs/")
// 	.then(res => {
// 		dispatch({
// 			type: GET_SONG,
// 			payload: res.data
// 		});
// 	})
// 	// .catch(err => console.log(e));
// };


// //any action need seperate file as js 

// //////////////

import axios from "axios";

import { GET_SONG } from "./types";

//Get Playlist
export const getSongs = () => dispatch => {
	axios
	.get("/api/salalem/Songs/")
	.then(res => {
		dispatch({
			type: GET_SONG,
			payload: res.data
		});
	})
	
};


//any action need seperate file as js 