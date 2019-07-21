import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class TestInput extends Component {
  constructor(props) {
    super(props)
    console.log(typeof props.num)
    console.log(typeof props.bool)
    console.log(JSON.stringify(props))

    this.inputRef = React.createRef()
  }

  componentDidMount() {
    // Input 태그 / Input 객체
    this.inputRef.current.focus()
    this.inputRef.current.style.color = "blue"
  }

  // ref
  render() {
    return (
      <div>
        <h1>Test Input</h1>
        <input type='text' ref={this.inputRef} />
      </div>
    )
  }
}

TestInput.propTypes = {
  str: PropTypes.string.isRequired,
  num: PropTypes.number,
  bool: PropTypes.bool
}

TestInput.defaultProps = {
  str: "안녕하세요",
  num: 273,
  bool: true
}
