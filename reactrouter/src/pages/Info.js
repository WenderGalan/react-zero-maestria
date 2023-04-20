import React from 'react'
import { useParams } from 'react-router-dom'

const Info = (props) => {
  debugger
  // const { record } = props.location.state
  // debugger
  // console.log('~> ', record)
  const { id } = useParams()
  return (
    <div>
      <h1>Mais informações sobre o produto: { id }</h1>
    </div>
  )
}

export default Info
