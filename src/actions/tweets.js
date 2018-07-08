import { saveLikeToggle, saveTweet } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEETS = 'TOGGLE_TWEETS'
export const ADD_TWEET = 'ADD_TWEET'


export function receive_tweets(tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}

function toggle_tweets({id, autheduser, hasLiked}) {
    return {
        type: TOGGLE_TWEETS,
        id,
        autheduser,
        hasLiked
    }
}

export function handleToggleTweet(info) {
    return (dispatch) => {
        dispatch(toggle_tweets(info))
        return saveLikeToggle(info)
            .catch((e) => {
                console.warn('Error in toggle tweet>>', e)
                dispatch(toggle_tweets(info))
            })
    }
}

function addTweet(tweet) {
    return {
        type: ADD_TWEET,
        tweet
    }
}

export function handleAddTweet(text, replyingTo) {
    return (dispatch, getState) => {
        const { autheduser } = getState()
        dispatch(showLoading())
        return saveTweet ({
            text,
            author: autheduser,
            replyingTo
        }).then((tweet) => {
            dispatch(addTweet(tweet))
            dispatch(hideLoading())
        })
    }
}