import { getInitialData } from '../utils/api'
import { receive_users } from './users'
import { receive_tweets } from './tweets'
import { receive_auth_user } from './autheduser'
import { showLoading, hideLoading } from 'react-redux-loading'


const autheduser = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        getInitialData().then(({users, tweets}) => {
            dispatch(receive_users(users))
            dispatch(receive_tweets(tweets))
            dispatch(receive_auth_user(autheduser))
            dispatch(hideLoading())
        })
    }
}