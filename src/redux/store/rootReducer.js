import { combineReducers } from 'redux'
import { currencyReducers } from '../reducers/currencyReducers'

export const rootReducer = combineReducers({
    currency: currencyReducers,
})
