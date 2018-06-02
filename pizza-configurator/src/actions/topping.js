import {calculatePrice} from './price'

export const ADD_TOPPING = 'ADD_TOPPING'

export const addTopping = (pizza, event) => (dispatch) => {
    const checkboxChecked = event.target.checked

    if(checkboxChecked === true) {
        dispatch({ type: ADD_TOPPING, payload: pizza })
        dispatch(calculatePrice())
    }
}
