import {combineReducers} from 'redux'
import {UserListReducer} from "../Actions"


 
const rootReducer = combineReducers({
  users: UserListReducer
})

export default rootReducer


