import {combineReducers} from 'redux'
<<<<<<< HEAD
import {usersReducer} from "./reducersAdmin"
import {articlesReducer} from './reducersArticles'
 const allReducers =combineReducers({
    users:usersReducer,
    articles:articlesReducer
=======
import {usersReducer,NumberusersReducer} from "./reducersAdmin"
 const allReducers =combineReducers({
    users:usersReducer,
    nbrUsers:NumberusersReducer
>>>>>>> ef48c334ef85cb0b2274d910cf24d643bea27ef0
})
export default allReducers