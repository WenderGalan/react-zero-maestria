import { useState } from 'react'

const ManageData = () => {
    const [number, setNumber] = useState(10);

    return (
    <div>
        <div>Valor: { number }</div>
        <button onClick={() => setNumber(number + 10)}>Adicionar + 10 </button>
        <br />
        <button onClick={() => setNumber(0)}>Resetar Valor</button>
    </div>
    )
}

export default ManageData