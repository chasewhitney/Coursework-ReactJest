import { CREATE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export default function(state = [], action) {
  console.log('hit comments reducer');
  switch(action.type){
    case CREATE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      const data = action.payload.data;
      const newComs = data.map(item => item.name);
      return [...state, ...newComs];
    default:
      return state;
  }
}
