import { CREATE_COMMENT } from 'actions';

export default function(state = [], action) {
  switch(action.type){
    case CREATE_COMMENT:
      console.log(`received payload: ${action.payload}`);
      console.log(`state: ${JSON.stringify(state)}`);
      return state.concat(action.payload);
    default:
      console.log(`default case`);
      return state;
  }
}
