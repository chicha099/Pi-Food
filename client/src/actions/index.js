import axios from 'axios';

export function getRecipes() {
    return function (dispatch) {
        axios.get('http://localhost:3001/recipes')
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
        axios.get('http://localhost:3001/types')
            .then(resp => {
                return dispatch({
                    type: 'GET_TYPES',
                    payload: resp.data
                })
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
        axios.get(`http://localhost:3001/recipes?query=${name}`)
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
        axios.post('http://localhost:3001/recipes', payload)
            .then(resp => {
                return resp;
            })
    }
}

export function GetRecipeById(id) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/recipe/${id}`)
            .then(resp => {
                return dispatch({
                    type: 'SEARCH_ID',
                    payload: resp.data
                })
            })
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