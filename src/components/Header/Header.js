import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from './Header.module.scss'

const Header = () => {
    return (
        <div className={styled.wrapper}>
            <NavLink to="/" className={styled.imageContainer}>
                <img
                    src="https://image.flaticon.com/icons/png/512/37/37186.png"
                    alt=""
                    className={styled.image}
                />
            </NavLink>
            <nav className={styled.mainNav}>
                <ul className="main-nav-list">
                    <NavLink to="/" className={styled.link}>
                        Home
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Header
