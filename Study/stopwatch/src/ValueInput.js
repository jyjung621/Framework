import React, { Component } from 'react'

export default class ValueInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    })
  }

  render() {
    return (
      <div>
        <label>{this.props.title}: <br />
        <input 
          type='text'
          value={this.state.value}
          onChange={(e) => {
            // 유효성 검사
            const v = e.target.value
            const newValue = v.replace(/[^0-9]/g,'')
            this.setState({
                value: newValue
            })
            // 이벤트 실행
            if(this.props.onChange) {
              this.props.onChange({
                target: this,
                value: newValue
              })
            }
          }}  
        />
        </label>
      </div>
    )
  }
}