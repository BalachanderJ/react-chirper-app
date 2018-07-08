import { ADD_TWEET, TOGGLE_TWEETS, RECEIVE_TWEETS } from '../actions/tweets'

export default function tweets(state = {}, action) {
    switch (action.type) {
        case RECEIVE_TWEETS:
            return {
                ...state,
                ...action.tweets
            }
        case TOGGLE_TWEETS:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes: action.hasLiked === true
                        ? state[action.id].likes.filter((uuid) => uuid !== action.autheduser)
                        : state[action.id].likes.concat([action.autheduser])
                }
            }
        case ADD_TWEET:
            const { tweet } = action
            let replyingTo = {}
            if (tweet.replyingTo !== null) {
                replyingTo = {
                    [tweet.replyingTo]: {
                        ...state[tweet.replyingTo],
                        replies: state[tweet.replyingTo].replies.concat([tweet.id])

                    }
                }
            }

            return {
                ...state,
                [action.tweet.id]: action.tweet,
                ...replyingTo
            }
        default:
            return state
    }
}