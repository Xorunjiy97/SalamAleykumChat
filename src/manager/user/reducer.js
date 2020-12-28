import constants from "../../constants";

const initialState = {
    user: "",
};

export default (state = initialState, action ) => {
    switch (action.type) {
        case constants.ADD_USER:
            return {
                ...state,
               user: action.payload,
            };
        case constants.DELETE_USER:
            return {
                ...state,
                user: "", 
            };
        default:
            return state;
    }
}