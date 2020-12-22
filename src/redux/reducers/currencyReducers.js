import {
    FETCH_CURRENCY_STARTED,
    FETCH_CURRENCY_SUCCESS,
    FETCH_CURRENCY_FAILURE,
    CHANGE_CURRENCY,
} from '../actions/ActionsType'

const initialState = {
    initialCurrency: 'USD',
    isLoading: false,
    currency: [],
    error: null,
}

export const currencyReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CURRENCY_STARTED:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_CURRENCY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currency: action.payload,
            }
        case FETCH_CURRENCY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case CHANGE_CURRENCY:
            return {
                ...state,
                initialCurrency: action.payload,
            }
        default:
            return state
    }
}
