import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toppingChoices } from '../library'
import { addTopping } from '../actions/topping'


class ToppingList extends Component {
  render() {
    return (
      <div>
        <h1>Select your toppings (max. 3):</h1>
        {
          toppingChoices.map((toppingChoice) => {
            const maxTopping = this.props.topping.length >= 3
            return <p key={toppingChoice.id}>
              <label>{toppingChoice.name} &euro; {toppingChoice.price.toFixed(2)}
                <input type="checkbox" name="topping" onChange={(event) => this.props.addTopping(toppingChoice, event)} disabled={maxTopping}/>
              </label>
            </p>
          })
        }
      </div>
    )
  }
}
const mapStateToProps = (state, props) => ({
  topping: state.order.topping
})

export default connect(mapStateToProps, { addTopping })(ToppingList)


