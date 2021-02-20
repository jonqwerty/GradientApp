import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { addNewGradient } from '../redux/app-reducer'
import s from './NewGradientPage.module.css'



const NewGradientPage = () => {

    const dispatch = useDispatch()

    const[hexOne, setHexOne] = useState('')
    const[hexTwo, setHexTwo] = useState('')
    const[validation, setValidation] = useState(false)
    
    const handleChangeHexOne = (e) => {
        setHexOne( e.target.value)
    }

    const handleChangeHexTwo = (e) => {
        setHexTwo( e.target.value)
    }

    const handleSubmit = (e) => {
            e.preventDefault()
            const gradient = {
                hexOne, hexTwo
            }
              
            dispatch(addNewGradient(gradient) )
        
            setValidation(true)

            }
    
    
    { if (validation) {
        return <Redirect to='/home' />
    } 
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input  type="text"  onChange={handleChangeHexOne}/>
                <input type="text"  onChange={handleChangeHexTwo}/>

            {
                hexOne.match(/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/) && hexTwo.match(/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/)
                ?<input className={s.but} type="submit" value='Add Gradient' />  
                :<input className={s.but} type="submit" value='Add Gradient'disabled />
            }
            </form>
           
        </div>
    )
    }
}

export default NewGradientPage