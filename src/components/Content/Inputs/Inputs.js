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
    const [error, setError] = useState({
        UAH: '',
        otherCurrency: ''
    })

    const currency = useSelector(getCurrency)
    const exchangeRates = useSelector(state =>
        getExchangeRates(state, currency)
    )

    useEffect(() => {
        if (currentInput === 1) {
            setUAH((+otherCurrency * exchangeRates.buy).toFixed(2) || '')
        } else if (currentInput === 2) {
            setOtherCurrency((+UAH / exchangeRates.buy).toFixed(2) || '')
        }
    }, [currentInput, UAH, otherCurrency, currency])

    const validateNumber = (number, e) => {
        if (number >= 0) {
            setError({
                UAH: '',
                otherCurrency: ''
            })
        } else {
            setError({ ...error, [e.target.name]: 'Must be number' })
        }
    }

    const handleChangeUAH = e => {
        validateNumber(e.target.value, e)
        setUAH(e.target.value)
    }
    const handleChangeOtherCurrency = e => {
        validateNumber(e.target.value, e)
        setOtherCurrency(e.target.value)
    }

    const focusInputFirst = () => setCurrentInput(1)
    const focusInputSecond = () => setCurrentInput(2)

    return (
        <div className={styled.inputs}>
            <div className={styled.inputWithError}>
            <input
                name="otherCurrency"
                className={styled.input}
                value={otherCurrency}
                onChange={handleChangeOtherCurrency}
                onClick={focusInputFirst}
            />
            <span className={styled.error}>{error.otherCurrency}</span>
            </div>
            <div className={styled.inputWithError}>
            <input
                name="UAH"
                className={styled.input}
                value={UAH}
                onChange={handleChangeUAH}
                onClick={focusInputSecond}
            />
            <span className={styled.error}>{error.UAH}</span>
            </div>
        </div>
    )
}

export default Inputs
