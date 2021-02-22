import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editSomeGradient } from '../redux/app-reducer'
import { Redirect, useHistory } from 'react-router-dom'
import s from '../New/NewGradientPage.module.css'




const EditPage = () => {

    const gradients = useSelector((state) => { return state.app.gradients})

    const dispatch = useDispatch()

    const[hexOne, setHexOne] = useState('')
    const[hexTwo, setHexTwo] = useState('')
    const[id, setId] = useState('')
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
              
                dispatch(editSomeGradient(id, gradient) )
        
                setValidation(true)
            }

    const history = useHistory()

    
    useEffect(() => {
        const id = history.location.pathname.split('/').pop()
        setId(id)    
        const item = gradients.find(item => item.id === id)
        setHexOne(item.hexOne)
        setHexTwo(item.hexTwo)

    },[])
    

    
    { if (validation) {
        return <Redirect to='/home' />
    } 
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input title="hexOne" type="text" value = {hexOne} onChange={handleChangeHexOne}/>
                <input title="hexTwo" type="text" value = {hexTwo} onChange={handleChangeHexTwo}/>

            {
                hexOne.match(/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/) && hexTwo.match(/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/)
                ?<input data-testid="b" className={s.but} type="submit" value='Edit Gradient' />  
                :<input data-testid="b" className={s.but} type="submit" value='Add Gradient'disabled />
            }
            </form>
           
        </div>
    )
    }
}

export default EditPage