import { API_URL } from '../../data/constants'

import {
    FETCH_CURRENCY_STARTED,
    FETCH_CURRENCY_SUCCESS,
    FETCH_CURRENCY_FAILURE,
    CHANGE_CURRENCY,
} from './ActionsType'

export const fetchCurrency = () => {
    return dispatch => {
        dispatch(fetchCurrencyStarted())

        fetch(API_URL)
            .then(res => res.json())
            .then(json => dispatch(fetchCurrencySuccess(json)))
            .catch(error => dispatch(fetchCurrencyFailure(error.message)))
    }
}

const fetchCurrencyStarted = () => ({
    type: FETCH_CURRENCY_STARTED,
})

const fetchCurrencySuccess = currency => ({
    type: FETCH_CURRENCY_SUCCESS,
    payload: currency,
})

const fetchCurrencyFailure = error => ({
    type: FETCH_CURRENCY_FAILURE,
    payload: error,
})

export const changeCurrency = currency => ({
    type: CHANGE_CURRENCY,
    payload: currency,
})
