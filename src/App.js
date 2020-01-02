import React, { Component, Fragment } from 'react'
import Item from './Components/Item'
import Hookitem from './Components/Hookitem'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      val: '',
      aa: 1,
      list: ['a', 'b', 'c']
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.add = this.add.bind(this)
  }
  render () {
    return (
      <Fragment>
        <h1>Hello React & Webpack!</h1>
        <div>
          <input type="text" value={this.state.val} onChange={this.changeHandler} />
          <button onClick={this.add}>Add {this.state.aa}</button>
        </div>
        <ul>
          {
            // this.state.list.map((name, index) => <li key={index} onClick={this.del.bind(this, index)}>{`I'm ${name}!`}</li>)
            this.state.list.map((name, index) => <Item key={name+index} index={index} content={name} del={this.del.bind(this)} />)
          }
        </ul>
        <Hookitem />
      </Fragment>
    );
  }
  changeHandler (e) {
    this.setState({
      val: e.target.value
    })
  }
  add () {
    this.setState({
      val: '',
      list: [...this.state.list, this.state.val]
    })
  }
  del (index) {
    console.log(index);
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default App