export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receive_users(users) {
    return {
        type: RECEIVE_USERS,
        users
    }

}