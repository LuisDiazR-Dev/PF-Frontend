import { combineReducers } from 'redux';

import authReducer from "./authReducer";
import errorsReducer from "./errorsReducer"
import projectsReducer from "./projectsReducer"
import technologiesReducer from "./technologiesReducer"
import themesReducer from "./themesReducer"
import usersReducer from "./usersReducer"
import subscriptionReducer from './subscriptionReducer'; 

const rootReducer = combineReducers({
    auth: authReducer,
    errors: errorsReducer,
    projects: projectsReducer,
    technologies: technologiesReducer,
    themes: themesReducer,
    users: usersReducer,
    subscription: subscriptionReducer 
})

export default rootReducer
