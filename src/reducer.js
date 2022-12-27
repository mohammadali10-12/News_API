const reducer = (state, action) => {
    switch (action.type) {
        case 'is_loading':
            return {
                ...state,
                isLoading: true
            }
        case 'get_stories':
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
            };
    }
    return state;
};


export default reducer;