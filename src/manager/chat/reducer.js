import constants from '../../constants';

const initialState = {
    chat:[],
};
// подстроить под наш проект 
export default (state = initialState, action ) => {
    switch (action.type) {
        case constants.ADD_MESSAGE:
            return {
                ...state,
                // chat: реализовать метод push,
            };
        case constants.SAVE_MESSAGE_STORE:
            return {
                ...state,
                // gamePositions: action.payload  метод который возвращает изм. чат 
            }
        default:
            return state;
    }
}