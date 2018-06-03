import React, { Component } from 'react'
import BaseMenu from './BaseMenu'
import SauceList from './SauceList'
import ToppingList from './ToppingList'
import TotalPrice from './TotalPrice'
import DeliveryChoice from './DeliveryChoice'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 1,
    paddingBottom: 1,
    marginTop: theme.spacing.unit * 1,
})
})

class OrderContainer extends Component {
  render() {
    return (
      <form>
            <Paper className={this.props.classes.root}>
              <TotalPrice />
            </Paper>
        <div>
              <Paper className={this.props.classes.root}>
                <BaseMenu />
              </Paper>
              <Paper className={this.props.classes.root}>
                <SauceList />
              </Paper>
              <Paper className={this.props.classes.root}>
                <ToppingList />
              </Paper>
              <Paper className={this.props.classes.root}>
                <DeliveryChoice />
              </Paper>
        </div>
      </form>
    )
  }
}

export default withStyles(styles)(OrderContainer)