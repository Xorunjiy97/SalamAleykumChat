import constants from '../../constants';

const initialState = {
    chat: [],
};

export default (state = initialState, action ) => {
    switch (action.type) {
        case constants.ADD_MESSAGE:
            return {
                ...state,
               chat: state = state.chat.concat(action.payload),
            };
        default:
            return state;
    }
}