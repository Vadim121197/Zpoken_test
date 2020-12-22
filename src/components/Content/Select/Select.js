import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeCurrency } from '../../../redux/actions/currencyActions'
import { getCurrency } from '../../../redux/selectors/currencySelectors'

import styled from './Select.module.scss'

const Select = () => {
    const initialCurrency = useSelector(getCurrency)

    const dispatch = useDispatch()

    const handleSelected = e => dispatch(changeCurrency(e.target.value))

    return (
        <div>
            <select
                name="currency"
                value={initialCurrency}
                className={styled.select}
                onChange={handleSelected}>
                <option value="USD">USD/UAH</option>
                <option value="EUR">EUR/UAH</option>
                <option value="BTC">BTC/UAH</option>
                <option value="RUR">RUR/UAH</option>
            </select>
        </div>
    )
}

export default Select
