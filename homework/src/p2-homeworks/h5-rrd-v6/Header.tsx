import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import style from './Header.module.css'

function Header() {
    const classActive = ({isActive}: any) => isActive ? `${style.link} ${style.link_active}` : style.link;
    return (
        <div className={style.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={classActive}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={classActive}>junior</NavLink>
           <NavLink to={PATH.JUNIOR_PLUS} className={classActive}>junior+</NavLink>
            <div className={style.block}>Yo!</div>
        </div>
    )
}

export default Header
