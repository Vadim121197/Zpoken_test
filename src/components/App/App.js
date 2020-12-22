import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { fetchCurrency } from '../../redux/actions/currencyActions'

import Content from '../Content/Content'
import Header from '../Header/Header'

import styled from './App.module.scss'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => dispatch(fetchCurrency()), [])
    return (
        <BrowserRouter>
            <div className={styled.container}>
                <Header />
                <Content />
            </div>
        </BrowserRouter>
    )
}

export default App
