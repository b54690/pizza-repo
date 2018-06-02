import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deliveryChoice } from '../library'
import { deliveryOption } from '../actions/delivery'

class DeliveryChoice extends Component {
  render() {
    return (
      <div>
        <h1>Select delivery method:</h1>
        {
          deliveryChoice.map((delivery) => {
            return <p key={delivery.id}>
              <label>
                {delivery.name}
                <input type="radio" name="delivery" onChange={() => this.props.deliveryOption(delivery)} />
              </label>
            </p>
          })
        }
      </div>
    )
  }
}


export default connect(null, { deliveryOption })(DeliveryChoice)