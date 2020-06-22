import {combineReducers} from 'redux'
import {usersReducer} from "./reducersAdmin"
import {articlesReducer} from './reducersArticles'
 const allReducers =combineReducers({
    users:usersReducer,
    articles:articlesReducer
})
export default allReducers