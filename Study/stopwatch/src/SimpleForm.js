import React, { Component } from 'react';

export class SimpleForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 'a'
    }

  }

  

  render () {
   

    return (
      <form 
        onSubmit={(e) => {
          window.alert('전송: ' + this.state.value)
          e.preventDefault()
        }}>
        <input type='text' value={this.state.value} 
          onChange={(e) => {
            const curValue = e.target.value
            const newValue = curValue.replace(/[^0-9]/g,'')
            this.setState({ value: newValue })
            console.log(newValue)
          }}/>
        <input type='submit' />
      </form>
    )
    
  }
}

