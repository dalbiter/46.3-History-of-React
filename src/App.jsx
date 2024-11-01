import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import CounterHOC from './HOC/CounterUsingHOC'

function App() {

  return (
    <>
      <Counter color="purple" initialVal={10} />  
      <Counter initialVal={10} /> 
      <CounterHOC /> 
    </>
  )
}

export default App
