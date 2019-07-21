import React, { Component } from 'react'

export class MultiForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      hobby: ''
    }
  }

  render() {
    const doChange = (e) => {
      const value = e.target.value
      const key = e.target.name
      console.log('key',key)
      console.log('value',value)
      this.setState({
        [key]: value
      })
    }
    return (
      <form onSubmit={(e) => {
        window.alert(JSON.stringify(this.state))
        e.preventDefault()
      }}>
        <input name='name' value={this.name} onChange={doChange}/><br />
        <input name='age' value={this.age} onChange={doChange} /><br />
        <input name='hobby' value={this.hobby} onChange={doChange} /><br />
        <input type='submit' />
      </form>
    )
  }
}