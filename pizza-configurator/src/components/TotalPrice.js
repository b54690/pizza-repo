import React, { Component } from 'react'
import { connect } from 'react-redux'

class TotalPrice extends Component {
  render() {
    return (
      <h1 className="total">Total Price &euro; {(this.props.totalPrice).toFixed(2)}</h1>
    )
  }
}

const mapStateToProps = (state, props) => ({
  totalPrice: state.order.totalPrice
})

export default connect(mapStateToProps)(TotalPrice)