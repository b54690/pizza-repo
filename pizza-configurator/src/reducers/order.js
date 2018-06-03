import { ADD_BASE } from '../actions/base'
import { ADD_TOPPING } from '../actions/topping'
import { ADD_SAUCE } from '../actions/sauce'
import { DELIVERY_OPTION } from '../actions/delivery'
import { CALCULATE_PRICE } from '../actions/price'

const initialState = {
        base: null,
        topping: [],
        sauce: null,
        totalPrice: 0,
        droneDelivery: false
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
      case CALCULATE_PRICE:
        return {...state, totalPrice: payload}
      case ADD_BASE:
        return {...state, base: payload}
      case ADD_SAUCE:
        return {...state, sauce: payload}
      case ADD_TOPPING:
          return {...state, topping: [...state.topping, payload] }
      case DELIVERY_OPTION:
          return {...state, droneDelivery: payload.id === 1}
      default:
          return state
    }
}