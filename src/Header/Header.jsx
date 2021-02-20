import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = () => {

    return (
        <header className={s.header}>
            <div className={s.item}>
                <p>Gradient App</p>
            </div>
            <div className ={s.link}>
            <div className={s.item} >
                <NavLink to='/home' activeClassName={s.active}>Home Page</NavLink>
            </div>
            <div className={s.item} >
                <NavLink to='/new' activeClassName={s.active}>New Gradient</NavLink>
            </div>
            </div>
        </header>
    )
}

export default Header