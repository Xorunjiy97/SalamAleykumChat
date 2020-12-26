import constants from '../constants';

export const addMessage = payload => ({
    type: constants.ADD_MESSAGE,
    payload,
});

export const saveMessageStore = payload => ({
    type: constants.SAVE_MESSAGE_STORE,
    payload,
});

export const logIn = payload => ({
    type: constants.LOG_IN,
    payload,
});

export const logOut = payload => ({
    type: constants.LOG_OUT,
    payload,
});