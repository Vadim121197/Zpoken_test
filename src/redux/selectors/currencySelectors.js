import { createSelector } from 'reselect'

export const getCurrency = createSelector(
    state => state.currency.initialCurrency,
    currency => currency
)

export const getExchangeRates = createSelector(
    (state, currency) =>
        state.currency.currency.filter(item => item.ccy === currency)[0],
    exchangeRates => exchangeRates
)
