import React from 'react'

import Inputs from './Inputs/Inputs'
import Select from './Select/Select'

import styled from './Content.module.scss'

const Content = () => {
    return (
        <div className={styled.container}>
            <Select />
            <Inputs />
        </div>
    )
}

export default Content
