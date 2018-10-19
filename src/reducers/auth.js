import { CHANGE_AUTH } from 'actions/types';

export default function(state = false, action) {
  console.log('hit auth reducer');
  switch(action.type) {
    case CHANGE_AUTH:
      console.log('auth reducer returning:', action.payload);
      return action.payload;
    default:
      console.log('action missed:', action.type);
      return state;
  }
}
