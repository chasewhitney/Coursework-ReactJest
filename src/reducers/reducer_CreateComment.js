import { CREATE_COMMENT } from 'actions';

export default function(state = {}, action) {
  switch(action.type){
    case CREATE_COMMENT:
      console.log(`sending payload: ${action.payload}`);
      return action.payload;
    default:
      console.log(`default case`);
      return state;
  }
}
