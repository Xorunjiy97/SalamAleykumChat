import constants from '../../constants';
import chatWindow from './manager/modules/chatWindow';
import autorisation from './manager/modules/autorisation';

const initialState = {
    view: getState()
};

export default (state = initialState, action ) => {
    switch (action.type) {
        case constants.LOG_IN:
            return {
                ...state,
               view: state = chatWindow(),
            };
        case constants.LOG_OUT:
            return {
                ...state,
                view: state = autorisation(), 
            };
        default:
            return state;
    }
}