import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import CounterHOC from './HOC/CounterUsingHOC';
import Things from './HOC/thingCounter'

function App() {

  return (
    <>
      <Counter color="purple" initialVal={10} />  
      <Counter initialVal={10} /> 
      <CounterHOC />
      <Things /> 
    </>
  )
}

export default App
