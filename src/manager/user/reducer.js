import constants from '../../constants';

const initialState = {
    user:[],
};

export default (state = initialState, action ) => {
    switch (action.type) {
        case constants.LOG_IN:
            return {
                ...state,
               user: state.push(action.payload),
            };
        case constants.LOG_OUT:
            return {
                ...state,
                user: state = [], 
            };
        default:
            return state;
    }
}