import {SAVE_COMMENT, FETCH_COMMENTS} from 'actions/types';

export default function(state = [], action) {
   //defaulting state to be an empty array 
  switch (action.type) {
    case SAVE_COMMENT: 
      return [...state, action.payload];
    case FETCH_COMMENTS:
      const comments = action.payload.data. map(comment => comment.name);//the array of objects that we want to iterate through and for every comment object, we return just the name 
      return [...state, ...comments]
    default: 
      return state;
  }
 }