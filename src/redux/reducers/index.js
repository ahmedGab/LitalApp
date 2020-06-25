import {combineReducers} from 'redux'
import {usersReducer,NumberusersReducer} from "./reducersAdmin"
import {articlesReducer} from './reducersArticles'
import {historiqueReducer} from './reducerHistorique'
 const allReducers =combineReducers({
    users:usersReducer,
    nbrUsers:NumberusersReducer,
    articles:articlesReducer,
    historique:historiqueReducer

})
export default allReducers