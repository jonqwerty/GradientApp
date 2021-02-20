import { gradientsAPI } from "../api/app-api"


const initialState = {
    gradients: [ ]  
} 

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_GRADIENTS':{
            return { ...state, gradients: action.gradients }
            }

        case 'NULL_GRADIENTS': {
                return { ...state, gradients: []}
            } 

        default:
            return state
    }
}

export const actions = {
    setGradients: (gradients) => ({type: 'SET_GRADIENTS', gradients }),
    nullGradients: () => ({type: 'NULL_GRADIENTS' }),
}


export const requestGradients = () => {
   
    return async ( dispatch, getState) => {
                      
        let res = await gradientsAPI.getGradients()
        
        if (res.data !== null) {
            const results =  Object.keys(res.data).map(key => {
                return {
                    ...res.data[key],
                    id: key
                }
            })
            dispatch(actions.setGradients(results))
        } else {
            dispatch(actions.nullGradients())
        }
    }
}

export const addNewGradient = (gradient) => {
    
    return async ( dispatch, getState) => {
        
        await gradientsAPI.addGradient(gradient)
        
        dispatch(requestGradients())
    }
}

export const deleteSomeGradient = (id) => {
    
    return async ( dispatch, getState) => {

       await gradientsAPI.deleteGradient(id)
               
        dispatch(requestGradients())
    }
}

export const editSomeGradient = (id, gradient) => {
    
    return async ( dispatch, getState) => {

       await gradientsAPI.editGradient(id, gradient)
             
        dispatch(requestGradients())
    }
}


export default appReducer

