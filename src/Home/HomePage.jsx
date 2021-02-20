import React, { useEffect } from 'react'
import Gradient from './Gradient'
import { requestGradients } from '../redux/app-reducer'
import { useDispatch, useSelector } from 'react-redux'



const HomePage = () => {
    
    const gradients = useSelector((state) => { return state.app.gradients})

    const dispatch = useDispatch()

    useEffect(() => {
      
        dispatch(requestGradients())
       
    }, []) 

    

   if (gradients.length !==0 ) {
    return (
        <div>
        {
         gradients.map(g => <Gradient gradient={g} key={g.id} />)
        } 
        </div>
    )
    } else {
       return (
           <div style={{color:'white'}} >There are currently no gradients</div>
       )
    }   
}

export default HomePage