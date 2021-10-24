
const initialState = {
    recipes: [],
    allRecipes: [],
    types: [],
    detail: [],
    id: null,
    page: 1
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload,
            };
        case 'GET_TYPES':
            return {
                ...state,
                types: action.payload
            };
        default:
            return state;
    }
}

export default rootReducer;