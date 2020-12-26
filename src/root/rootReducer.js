import { combineReducers } from 'redux';
import chat from '../manager/chat/reducer';
import user from '../manager/user/reducer';


export default combineReducers({
   chat,
   user,
   view
});
