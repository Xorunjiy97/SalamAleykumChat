import constants from '../../constants';

const initialState = {
    page: 'Page1'
};

export default (state = initialState, action ) => {
    switch (action.type) {
        case constants.OPEN_CHAT_PAGE:
            return {
                ...state,
                page: state.page = 'Page2',
            };
        case constants.OPEN_AUTORISATION_PAGE:
            return {
                ...state,
                page: state.page = 'Page1',
            };
        default:
            return state;
    }
}
