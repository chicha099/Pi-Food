import axios from 'axios';

export function getRecipes() {
    return function (dispatch) {
        axios.get('/recipes')
            .then(resp => {
                return dispatch({
                    type: 'GET_RECIPES',
                    payload: resp.data
                })
            })
    }
}

export function getTypes() {
    return function (dispatch) {
        axios.get('/types')
            .then(resp => {
                return dispatch({
                    type: 'GET_TYPES',
                    payload: resp.data
                })
            })
    }
}

export function postTypes(payload) {
    return function (dispatch) {
        axios.post('/types', payload)
            .then(resp => {
                return resp;
            })
    }
}

export function filterRecipesByType(payload) {
    return {
        type: 'FILTER_BY_TYPE',
        payload
    }
}

export function orderRecipesByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderRecipesByRating(payload) {
    return {
        type: 'ORDER_BY_RATING',
        payload
    }
}

export function searchName(name) {
    return function (dispatch) {
        axios.get(`/recipes?query=${name}`)
            .then(resp => {
                return dispatch({
                    type: 'SEARCH_NAME',
                    payload: resp.data
                })
            })
    }
}

export function postRecipe(payload) {
    return function (dispatch) {
        axios.post('/recipes', payload)
            .then(resp => {
                return resp;
            })
    }
}

export function GetRecipeById(id) {
    return function (dispatch) {
        axios.get(`/recipes/${id}`)
            .then(resp => {
                return dispatch({
                    type: 'SEARCH_ID',
                    payload: resp.data
                })
            })
    }
}

export function changePopup(payload) {
    return {
        type: 'CHANGE_POPUP',
        payload
    }
}

export function resetDetail() {
    return {
        type: 'RESET_DETAIL'
    }
}

export function setPage(payload) {
    return {
        type: 'SET_PAGE',
        payload
    }
}

export function filter50(payload) {
return {
    type : 'FILTER_50',
    payload
}
}