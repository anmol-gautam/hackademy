const initialState = {
    loading: false
};

function globalReducer (state = initialState, action) {
    switch (action.type) {
        case 'START_LOADING':
            return {...state, loading: true};
        case 'STOP_LOADING':
            return {...state, loading: false};
        default:
            return state;
    }
}

export default globalReducer;