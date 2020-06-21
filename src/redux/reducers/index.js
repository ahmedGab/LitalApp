import {combineReducers} from 'redux'
import {usersReducer} from "./reducersAdmin"
 const allReducers =combineReducers({
    users:usersReducer
})
export default allReducers