import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toppingProducts } from '../library'
import { addTopping } from '../actions/topping'

class ToppingList extends Component {
  render() {
    return (
      <div>
        <h1>Select your toppings (max. 3):</h1>
        {
          toppingProducts.map((toppingProduct) => {
            return <p key={toppingProduct.id}>
              <label>{toppingProduct.name} &euro; {toppingProduct.price.toFixed(2)}
                <input type="checkbox" name="topping" onChange={(event) => this.props.addTopping(toppingProduct, event)}/>
              </label>
            </p>
          })
        }
      </div>
    )
  }
}


export default connect(null, { addTopping })(ToppingList)