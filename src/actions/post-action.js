import axios from 'axios';

import { FETCH_POST } from './type';

export function getPosts() {
  return function (dispatch) {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => {
        return dispatch({
          type: FETCH_POST,
          payload: response.data,
        });
      });
  };
}
