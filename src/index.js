import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.js'

const p = () => {
  return new Promise((resolve, reject) => {
		resolve('aaa')
	})
}
const aa = Object.assign({a: 2, b: 3}, {a: 8, c: 11})
console.log(aa)
console.log(Array.from('foo'));
p().then(data => {
  console.log(data)
})

ReactDOM.render(<App />, document.getElementById('app'))
