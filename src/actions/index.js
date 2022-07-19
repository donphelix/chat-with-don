export const addMessage = (payload, name) => {
    return {
        type: "MESSAGE_ADD",
        payload,
        name
    };
};
