import React, { Component } from 'react';
import ValueInput from './ValueInput'

export default class InchToCm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inch: 0,
      cm: 0
    }
  }

  render () {
    return (
      <div>
        <ValueInput title='inch' value={this.state.inch} 
          onChange={(e) => {
            this.setState({
              inch: e.value,
              cm: e.value * 2.54
            })
          }} />
        <ValueInput title='cm' value={this.state.cm} 
          onChange={(e) => {
            this.setState({
              cm: e.value,
              inch: e.value / 2.54
            })
          }} />
      </div>
    )
  }
}