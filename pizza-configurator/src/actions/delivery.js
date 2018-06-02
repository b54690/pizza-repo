import {calculatePrice} from './price'
export const DELIVERY_OPTION = 'DELIVERY_OPTION'

export const deliveryOption = (delivery) => (dispatch) => {
    dispatch({type: DELIVERY_OPTION, payload: delivery})
    dispatch(calculatePrice())
}

