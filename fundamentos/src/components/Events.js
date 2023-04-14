const Events = () => {

    /**
     * @param {*} e 
     */
    const handleMyEvent = (e) => {
        // console.log(e);
        console.log('Ativou o meu evento');
    }

    /**
     * @param {*} x 
     * @returns 
     */
    const renderSomething = (x) => {
        if (x) {
          return <h3>Renderizando isso!</h3>  
        } else {
            return <h3>Também pode renderizar isso!</h3>  
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou') }>Clique aqui também!</button>
            </div>
            { renderSomething(true) }
            { renderSomething(false) }
        </div>
    )
}
export default Events