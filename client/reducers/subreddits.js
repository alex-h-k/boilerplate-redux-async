import {RECEIVE_POSTS} from '../actions'

function subreddits (state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      console.log(action.posts)
      return action.posts

    default:
      return state
  }
}

export default subreddits
