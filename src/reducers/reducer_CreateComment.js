import { CREATE_COMMENT } from 'actions';

export default function(state = [], action) {
  switch(action.type){
    case CREATE_COMMENT:
      console.log(`received payload: ${action.payload}`);
      return state.concat(action.payload);
    default:
      return state;
  }
}
