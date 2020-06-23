import {combineReducers} from 'redux'
import {usersReducer,NumberusersReducer} from "./reducersAdmin"
import {articlesReducer} from './reducersArticles'
 const allReducers =combineReducers({
    users:usersReducer,
    nbrUsers:NumberusersReducer,
    articles:articlesReducer

})
export default allReducers