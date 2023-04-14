import React from 'react'

const ChangeMessageState = ({ handleMessage }) => {
    const messages = ["Oi", "Olá", "Oi, tudo bem!"];

  return (
    <div>
        {messages.map((message) => (
            <div>
                <button onClick={() => handleMessage(message)}>{ message }</button>
                <br />
            </div>
        ))}
    </div>
  )
}

export default ChangeMessageState