import {combineReducers} from 'redux'
import {NumberusersReducer} from "./reducersAdmin"

import {usersReducer} from "./reducersAdmin"
import {articlesReducer} from './reducersArticles'
 const allReducers =combineReducers({
    users:usersReducer,
    articles:articlesReducer,
    nbrUsers:NumberusersReducer

})
export default allReducers