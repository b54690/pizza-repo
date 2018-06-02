import {calculatePrice} from './price'
export const ADD_SAUCE = 'ADD_SAUCE'

export const addSauce = (pizza) => (dispatch) => {
    dispatch({type: ADD_SAUCE, payload: pizza})
    dispatch(calculatePrice())
}

