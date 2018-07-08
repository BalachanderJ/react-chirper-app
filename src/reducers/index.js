import { combineReducers } from 'redux'
import users from './users'
import tweets from './tweets'
import autheduser from './autheduser'
import { loadingBarReducer } from 'react-redux-loading'



export default combineReducers({
    users,
    tweets,
    autheduser,
    loadingBar: loadingBarReducer
})
