import React, { Component } from 'react'
import BaseMenu from './BaseMenu'
import SauceList from './SauceList'
import ToppingList from './ToppingList'
import TotalPrice from './TotalPrice'
import DeliveryChoice from './DeliveryChoice'
import { withStyles } from 'material-ui/styles'
import GridList from 'material-ui/Grid'
import Paper from 'material-ui/Paper'


const styles = theme => ({
  paper: {
    padding: 1,
  }
})

class OrderContainer extends Component {
  render() {
    return (
      <form>
          <GridList>
            <Paper className={this.props.classes.paper}>
              <TotalPrice />
            </Paper>
          </GridList>
        <div>
          <GridList>
              <Paper className={this.props.classes.paper}>
                <BaseMenu />
              </Paper>
            <GridList>
              <Paper className={this.props.classes.paper}>
                <SauceList />
              </Paper>
            </GridList>
            <GridList>
              <Paper className={this.props.classes.paper}>
                <ToppingList />
              </Paper>
            </GridList>
            <GridList>
              <Paper className={this.props.classes.paper}>
                <DeliveryChoice />
              </Paper>
            </GridList>
            </GridList>
        </div>
      </form>
    )
  }
}

export default withStyles(styles)(OrderContainer)