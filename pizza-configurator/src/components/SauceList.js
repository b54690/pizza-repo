import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSauce } from '../actions/sauce'
import { sauceChoices } from '../library'

class SauceList extends Component {
  render() {
    return (
      <div>
        <h1>Select your sauce:</h1>
        {
          sauceChoices.map((sauceChoice) => {
            return <p key={sauceChoice.id}>
              <label>{sauceChoice.name} &euro; {sauceChoice.price.toFixed(2)}
              <input type="radio" name="sauce" onChange={_ => this.props.addSauce(sauceChoice)}/></label>
            </p>
          })
        }
      </div>
    )
  }
}

export default connect(null, { addSauce })(SauceList)