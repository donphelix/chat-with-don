const messageReducer = (state = {}, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case "MESSAGE_ADD":
            newState[
                Math.random()
                    .toString(36)
                    .replace(/[^a-z]+/g, "")
                ] = {
                status: false,
                name: action.name,
                label: action.payload
            };
            break;
        default:
            break;
    }

    return newState;
};

export default messageReducer;
