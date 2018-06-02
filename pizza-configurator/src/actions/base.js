import {calculatePrice} from './price'
export const ADD_BASE = 'ADD_BASE'


export const addBase = (pizza) => (dispatch) => {
    dispatch({type: ADD_BASE, payload: pizza})
    dispatch(calculatePrice())
}




