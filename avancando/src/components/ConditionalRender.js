import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true);

    const [name, setName] = useState("João");

    return (
        <div>
            <h3>Isso será exibido?</h3>
            {x && <p>Se X for true, sim!</p>}
            {!x && <p>Agora X é falso!</p>}
            IF Ternário
            {name === "João" ? (
                <div>
                    <p>O nome é João!</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado!</p>
                </div>
            )}
            <button onClick={() => setName("Fulano")}>Clica aqui!</button>
        </div>
    )
}

export default ConditionalRender