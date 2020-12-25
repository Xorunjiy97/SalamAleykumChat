import constants from '../constants';

export const addMessage = payload => ({
    type: constants.ADD_MESSAGE,
    payload,
});

export const saveMessageStore = payload => ({
    type: constants.SAVE_MESSAGE_STORE,
    payload,
});
