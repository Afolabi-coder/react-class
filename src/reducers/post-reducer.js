import { FETCH_POST } from '../actions/type';

const initialState = {
  posts: [],
};

function postReducer(state = initialState, actions) {
  switch (actions.type) {
    case FETCH_POST:
      return {
        ...state,
        posts: actions.payload,
      };

    default:
      return state;
  }
}

export default postReducer;
