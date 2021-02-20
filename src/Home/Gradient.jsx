import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import s from './HomePage.module.css'
import { deleteSomeGradient } from '../redux/app-reducer'
import { useDispatch } from 'react-redux'


const Gradient = ({gradient}) => {
    let g = gradient
    
    const st = {
    display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundImage: `linear-gradient(to right, ${g.hexOne}, ${g.hexTwo})`,
      width: '50vw',
      height: '10vw',
      margin: '3vw auto'
    }

    const dispatch = useDispatch()

    const handleDelete = (e) => {
        e.preventDefault()
        const id =  e.target.value
        
        dispatch(deleteSomeGradient(id) )        
    }

    return(
        <div>
            <div className={s.container}>
                <div  style={st}>
                    <span>{g.hexOne}</span>
                    <span >{g.hexTwo}</span>
                </div>
                <button className={s.buttonDelete} value = {g.id} onClick={handleDelete}>&#10060;</button>
                <NavLink to={'/edit/' + g.id} >
                    <button className={s.buttonEdit} >&#9998;</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Gradient