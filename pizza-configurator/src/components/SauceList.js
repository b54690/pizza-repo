import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSauce } from '../actions/sauce'
import { sauceProducts } from '../library'

class SauceList extends Component {
  render() {
    return (
      <div>
        <h1>Choose your sauce:</h1>
        {
          sauceProducts.map((sauceProduct) => {
            return <p key={sauceProduct.id}>
              <label>{sauceProduct.name} &euro; {sauceProduct.price.toFixed(2)}
              <input type="radio" name="sauce" onChange={_ => this.props.addSauce(sauceProduct)}/></label>
            </p>
          })
        }
      </div>
    )
  }
}

export default connect(null, { addSauce })(SauceList)