import { GET_SONG } from "../actions/types.js";


const initialState = {
	//fetch from backend this array
	song: []
};
export default function(state = initialState, action) {
   switch(action.type) {
   	 	case GET_SONG:
	   	 	return {
	   	 		...state,
	   	 		song: action.payload
   			};
   	 	default:
   	 		return state;

   }
}