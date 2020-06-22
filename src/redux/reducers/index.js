import {combineReducers} from 'redux'
import {usersReducer,NumberusersReducer} from "./reducersAdmin"
 const allReducers =combineReducers({
    users:usersReducer,
    nbrUsers:NumberusersReducer
})
export default allReducers