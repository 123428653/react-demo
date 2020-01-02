import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component {
  constructor(props) {
    super(props)
    this.itemHandler = this.itemHandler.bind(this)
  }
  render() { 
    return (
      <li onClick={this.itemHandler}>{this.props.content}</li>
    )
  }
  itemHandler() {
    this.props.del(this.props.index)
  }
}

Item.propTypes = {
  index: PropTypes.number,
  content: PropTypes.string
}

export default Item;