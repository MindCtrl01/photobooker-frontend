import { REHYDRATE } from 'redux-persist';

const USER = {
    username: "",
    role: "",
    avatar: "",
};

const userReducer = (state = USER, action) => {
    switch (action.type) {
        // case "UPDATE_USERNAME":
        //     console.log(action)
        //     return { ...state, username: action.username, token: action.token, role: action.role, avatar: action.avatar };
        case REHYDRATE:
            return {
                ...state,
                username: state.username,
                role: state.role,
                avatar: state.avatar
            };
        default:
            return state
    }
}
export default userReducer;