export const CALCULATE_PRICE = 'CALCULATE_PRICE'

export const calculatePrice = () => (dispatch, getState) => {
    const state = getState()
    let totalPrice = 0

    if(state.order.base) totalPrice += state.order.base.price

    if(state.order.sauce) totalPrice += state.order.sauce.price

    if(state.order.topping.length > 0) {
        state.order.topping.map(topping => { return totalPrice += topping.price })
    }

    if(state.order.droneDelivery) totalPrice *= 1.1

dispatch({
    type: CALCULATE_PRICE,
    payload: totalPrice
})
}

