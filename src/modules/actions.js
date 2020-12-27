import constants from '../constants';

export const addUser = payload => ({
    type: constants.ADD_USER,
    payload,
});

export const addMessage = payload => ({
    type: constants.ADD_MESSAGE,
    payload,
});

export const deleteUser = () => ({
    type: constants.DELETE_USER,
});

export const openChatPage = () => ({
    type: constants.OPEN_CHAT_PAGE ,
});

export const openAutorisationPage = () => ({
    type: constants.OPEN_AUTORISATION_PAGE,
});
