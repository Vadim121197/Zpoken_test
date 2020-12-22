import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import {
    getCurrency,
    getExchangeRates,
} from '../../../redux/selectors/currencySelectors'

import styled from './Inputs.module.scss'

const Inputs = () => {
    const [UAH, setUAH] = useState('')
    const [otherCurrency, setOtherCurrency] = useState('')
    const [currentInput, setCurrentInput] = useState('')

    const currency = useSelector(getCurrency)

    const exchangeRates = useSelector(state =>
        getExchangeRates(state, currency)
    )

    useEffect(() => {
        if (currentInput === 1) {
            setUAH(+otherCurrency * exchangeRates || '')
        } else if (currentInput === 2) {
            setOtherCurrency(+UAH / exchangeRates || '')
        }
    }, [currentInput, UAH, otherCurrency, currency])

    const hadleChangeUAH = e => setUAH(e.target.value)
    const handleChangeOtherCurrency = e => setOtherCurrency(e.target.value)

    const focusInputFirst = () => setCurrentInput(1)
    const focusInputSecond = () => setCurrentInput(2)

    return (
        <div className={styled.inputs}>
            <input
                name="otherCurrency"
                className={styled.input}
                value={otherCurrency}
                onChange={handleChangeOtherCurrency}
                onClick={focusInputFirst}
            />
            <input
                name="UAH"
                className={styled.input}
                value={UAH}
                onChange={hadleChangeUAH}
                onClick={focusInputSecond}
            />
        </div>
    )
}

export default Inputs
