import constants from '../../constants';

const initialState = {
    chat:[],
};

export default (state = initialState, action ) => {
    switch (action.type) {
        case constants.ADD_MESSAGE:
            return {
                ...state,
               chat: state.push(action.payload),
            };
        case constants.SAVE_MESSAGE_STORE:
            return {
                ...state,
                chat: action.payload, 
            };
        default:
            return state;
    }
}