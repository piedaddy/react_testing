//auth purpose rn is just to store  boolean 
import {CHANGE_AUTH} from 'actions/types';

export default function(state = false, action) {
                    //  by default login is false 
  switch (action.type) {
    case CHANGE_AUTH: 
      return action.payload;
    default: 
      return state;
  }
}