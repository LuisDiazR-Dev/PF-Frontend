import { LOGIN_USER, LOGOUT_USER, GET_PROFILE, FETCH_ERROR, LOGIN_REQUEST, HANDLE_ERROR } from '../types';

const initialState = {
	loggedUser: null,
	token: localStorage.getItem('authToken') || null,
	loading: false,
	fetchError: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...state,
				loading: true,
				fetchError: null, 
			};
		case LOGIN_USER:
			localStorage.setItem('authToken', action.payload.token);
			return {
				...state,
				loggedUser: action.payload.user,
				token: action.payload.token,
				loading: false,
				fetchError: null, 
			};
		case LOGOUT_USER:
			localStorage.removeItem('authToken');
			return { ...state, loggedUser: null, token: null };
		case GET_PROFILE:
			return {
				...state,
				loggedUser: action.payload,
			};
		case FETCH_ERROR:
			return {
				...state,
				fetchError: action.payload,
				loading: false,
			};
		case HANDLE_ERROR:
			return {
				...state,
				fetchError: null,
			};
		default:
			return state;
	}
};

export default authReducer;
