import { combineReducers } from 'redux';
import chat from '../manager/chat/reducer';
import user from '../manager/user/reducer';
import view from '../manager/view/reducer';

export default combineReducers({
   chat,
   user,
   view
});
