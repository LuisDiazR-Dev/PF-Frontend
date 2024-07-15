import { combineReducers } from 'redux'
import {
	GET_ALL_PROJECTS,
	GET_PROJECT_BY_ID,
	SET_DARK_MODE,
	SET_LIGHT_MODE,
	SET_AUTH_TOKEN,
	LOGOUT,
	REGISTER_USER_FAILURE,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_REQUEST,
	FETCH_TECHNOLOGIES,
	FILTER_TECHNOLOGIES,
} from './actions-types'

const technologiesInitialState = {
	technologies: [],
	filteredTechnologies: []
}

const technologiesReducer = (state = technologiesInitialState, action) => {
	switch (action.type) {
		case FETCH_TECHNOLOGIES:
			return {
				...state,
				technologies: action.payload,
			}
		case FILTER_TECHNOLOGIES:
			console.log(action.payload)
			return {
				...state,
				filteredTechnologies: action.payload
			}
        
		default:
			return state
	}
}

const initialRegisterState = {
	loading: false,
	user: null,
	error: null,
}

const initialThemeState = {
	theme: localStorage.getItem('theme') || 'light',
}

const authInitialState = {
	authToken: localStorage.getItem('authToken') || null,
}

const projectsInitialState = {
	allProjects: [],
	filteredTechnologies: [],
	project: {},
}

const themeReducer = (state = initialThemeState, action) => {
	switch (action.type) {
		case SET_DARK_MODE:
			localStorage.setItem('theme', 'dark')
			return { ...state, theme: 'dark' }
		case SET_LIGHT_MODE:
			localStorage.setItem('theme', 'light')
			return { ...state, theme: 'light' }
		default:
			return state
	}
}

const authReducer = (state = authInitialState, action) => {
	switch (action.type) {
		case SET_AUTH_TOKEN:
			localStorage.setItem('authToken', action.payload)
			return { ...state, authToken: action.payload }
		case LOGOUT:
			localStorage.removeItem('authToken')
			return { ...state, authToken: null }
		default:
			return state
	}
}

const projectsReducer = (state = projectsInitialState, action) => {
	switch (action.type) {
		case GET_ALL_PROJECTS:
			return {
				...state,
				allProjects: action.payload,
			}

		case FILTER_TECHNOLOGIES:
			return {
				...state,
				filteredTechnologies: action.payload
			}
		
		case GET_PROJECT_BY_ID:
			return {
				...state,
				project: action.payload,
			}

		default:
			return state
	}
}

const registerReducer = (state = initialRegisterState, action) => {
	switch (action.type) {
		case REGISTER_USER_REQUEST:
			return { ...state, loading: true }
		case REGISTER_USER_SUCCESS:
			return { ...state, loading: false, user: action.payload }
		case REGISTER_USER_FAILURE:
			return { ...state, loading: false, error: action.payload }
		default:
			return state
	}
}

// const initialState = {
//     allUsers: [],
//     users: [],
//     userProjects: [],
//     userDetails: {},
// };

// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_USERS:
//             return {
//                 ...state,
//                 users: action.payload,
//                 allUsers: action.payload
//             };
//         case GET_BY_NAME:
//             return {
//                 ...state,
//                 users: action.payload,
//             };
//         case GET_DETAIL:
//             return {
//                 ...state,
//                 userDetails: action.payload,
//             };
//         case CLEAR_DETAIL:
//             return {
//                 ...state,
//                 userDetails: {},
//             };
//         case GET_PROJECTS:
//             return {
//                 ...state,
//                 userProjects: action.payload,
//             };
//         default:
//             return state;
//     }
// };

const techsInitialState = {
    loading: false,
    techs: [],
    error: null,
};

// const techsReducer = (state = techsInitialState, action) => {
//     switch (action.type) {
//         case GET_ALL_TECHS_REQUEST:
//             return { ...state, loading: true };
//         case GET_ALL_TECHS_SUCCESS:
//             return { ...state, loading: false, techs: action.payload };
//         case GET_ALL_TECHS_FAILURE:
//             return { ...state, loading: false, error: action.payload };
//         default:
//             return state;
//     }
// };

const projectInitialState = {
    loading: false,
    project: null,
    error: null,
};

const projectReducer = (state = projectInitialState, action) => {
    switch (action.type) {
        case ADD_PROJECT_REQUEST:
            return { ...state, loading: true };
        case ADD_PROJECT_SUCCESS:
            return { ...state, loading: false, project: action.payload };
        case ADD_PROJECT_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default combineReducers({
	auth: authReducer,
	theme: themeReducer,
	project: projectsReducer,
	technologies: technologiesReducer,
	register: registerReducer
})
