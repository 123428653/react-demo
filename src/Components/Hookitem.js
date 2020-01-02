import React, { useState, Fragment } from 'react';

function HookItem () {
  const [count, setCount] = useState(0)
  const [o, setO] = useState({text: 'Qin'})
  return (
    <Fragment>
      <p>You clicked {count} thimes</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </Fragment>
  )
}

export default HookItem