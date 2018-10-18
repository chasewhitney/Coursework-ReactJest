import { combineReducers} from 'redux';
import CommentsReducer from 'reducers/reducer_CreateComment';

const rootReducer = combineReducers({
  comments: CommentsReducer
});

export default rootReducer;
