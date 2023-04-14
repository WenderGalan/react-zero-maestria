const Challenge = () => {
    const primeiroValor = 5
    const segundoValor = 10
    let valorTotal = undefined

    const somarValores = () => {
        valorTotal = primeiroValor + segundoValor
    }

    return (
        <div>
            <div>
                <h4>Primeiro Valor: { primeiroValor }</h4>
                <h4>Segundo Valor: { segundoValor }</h4>
                <button onClick={somarValores}>Somar os Valores</button>
                <h3>Soma: { valorTotal || '0' }</h3>
            </div>
        </div>
    )
}

export default Challenge