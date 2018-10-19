import { combineReducers} from 'redux';
import CommentsReducer from 'reducers/reducer_comments';
import authReducer from 'reducers/auth';

const rootReducer = combineReducers({
  comments: CommentsReducer,
  auth: authReducer
});

export default rootReducer;
