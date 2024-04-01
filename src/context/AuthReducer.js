const reducer = (globalState, action) => {
    switch (action.type) {
    case "INICIAR_SESION":
        return {
        ...globalState,
        user: action.payload,
        };

    case "REGISTRAR_USUARIO":
        return {
        ...globalState,
        user: action.payload,
        };

    case "LOGOUT":
        return {
        ...globalState,
        user: {},
        };

    default:
        return globalState;
    }
};

export default reducer;