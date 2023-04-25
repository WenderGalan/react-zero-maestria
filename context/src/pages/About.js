// import { useContext } from 'react'
// import { CounterContext } from '../context/CounterContext'

import { useCounterContext } from '../hooks/useCounterContext'

const About = () => {
  const { counter } = useCounterContext()
  return (
    <div>
      <h1>Home</h1>
      <p>Valor do Contador: {counter}</p>
    </div>
  )
}

export default About