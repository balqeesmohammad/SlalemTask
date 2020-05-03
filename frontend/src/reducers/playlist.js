import { GET_PLAYLIST } from "../actions/types.js";


const initialState = {
	//fetch from backend this array
	playlist: []
};
export default function(state = initialState, action) {
   switch(action.type) {
   	 	case GET_PLAYLIST:
	   	 	return {
	   	 		...state,
	   	 		playlist: action.payload
   			};
   	 	default:
   	 		return state;

   }
}