import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBase } from '../actions/base'
import { baseList } from '../library'

class BaseMenu extends Component {
    render() {
        return(
            <div>
                <h1>Select your base:</h1>
                {
                    baseList.map((base)=> {
                        return <p key={base.id}>
                        <label>
                            {base.name} {base.size} cm &euro; {base.price}
                            <input type='radio' name='base' onChange={() => this.props.addBase(base)}/>
                        </label>
                    </p>
                    })
                }
            </div>
        )
    }
}

export default connect(null, {addBase}) (BaseMenu)