
const initialState = {
    recipes: [],
    allRecipes: [],
    types: [],
    detail: [],
    popup: false,
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
        case 'SET_PAGE':
            return {
                ...state,
                page: action.payload
            };
        case 'POST_RECIPE':
            return {
                ...state
            };
        case 'SEARCH_NAME':
            return {
                ...state,
                recipes: action.payload
            };
        case 'FILTER_BY_TYPE':
            const recipesName = state.allRecipes;
            const typesFiltered = action.payload === 'all' ? recipesName : recipesName.filter(r => r.types.includes(action.payload));
            return {
                ...state,
                recipes: typesFiltered
            };
        case 'ORDER_BY_NAME':
            const recipesOrdername = state.recipes;
            let orderedNames = action.payload === 'alpha-Asc' ?
                recipesOrdername.sort(function (a, b) {
                    if (a.title > b.title) {
                        return 1;
                    }
                    if (b.title > a.title) {
                        return -1;
                    }
                    return 0;
                }) :
                recipesOrdername.sort(function (a, b) {
                    if (a.title > b.title) {
                        return -1;
                    }
                    if (b.title > a.title) {
                        return 1;
                    }
                    return 0;
                });
            return {
                ...state,
                recipes: orderedNames
            };
        case 'ORDER_BY_RATING':
            const recipesOrderRating = state.recipes;
            let orderedRatings = action.payload === 'rating-Asc' ?
                recipesOrderRating.sort(function (a, b) {
                    if (a.spoonacularScore > b.spoonacularScore) {
                        return 1;
                    }
                    if (b.spoonacularScore > a.spoonacularScore) {
                        return -1;
                    }
                    return 0;
                }) :
                recipesOrderRating.sort(function (a, b) {
                    if (a.spoonacularScore > b.spoonacularScore) {
                        return -1;
                    }
                    if (b.spoonacularScore > a.spoonacularScore) {
                        return 1;
                    }
                    return 0;
                });
            return {
                ...state,
                recipes: orderedRatings
            };
        case 'CHANGE_POPUP':
            return {
                ...state,
                popup: action.payload[0],
                id: action.payload[1]
            };
        case 'SEARCH_ID':
            return {
                ...state,
                detail: action.payload
            };
        case 'RESET_DETAIL':
            return {
                ...state,
                detail: []
            }
        default:
            return state;
    }
}

export default rootReducer;