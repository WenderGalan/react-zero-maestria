import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"]);
    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "Jose", age: 39},
        {id: 3, name: "Burrilho", age: 35}
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return <div>
        <ul>
            { list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <ul>
            { users.map((item) => (
                <li key={item.id}>{item.id} - {item.name}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Deletar Usuário Aleatório</button>
    </div>;
}

export default ListRender