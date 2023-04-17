import './MyForm.css'
import { useState } from 'react'

const MyForm = ({ user }) => {
    // 6 - Controlled inputs

    // 3 - Gerenciamento de daddos
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [bio, setBio] = useState(user ? user.bio : "");
    const [role, setRole] = useState(user ? user.role : "");

    /**
     * @param {void} e 
     */
    const handleName = (e) => {
        setName(e.target.value)
    };

    // console.log(name);
    // console.log(email);

    const limparFomulario = () => {
        setName("");
        setEmail("");
        setBio("");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Enviando o formulário');
        console.log(name, email, bio, role);
        // Validação
        // Envio
        limparFomulario();
    };

    return (
    <div>
        { /* 5 - Envio de form */ }
        <form onSubmit={handleSubmit}>
            { /* 1 - Criação de form */ }
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeHolder="Digite o seu nome" onChange={handleName} value={name} />
            </div>
            { /* 2 - Label envolvendo input */}
            <label>
                { /* 4 - Simplificação de manipulação de state */}
                <span>E-mail:</span>
                <input type="email" name="email" placeHolder="Digite o seu email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            { /* 8 - Textarea */}
            <label>
                <span>Biografia:</span>
                <textarea name="bio" placeHolder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            { /* 8 - Select */}
            <label>
                <span>Função no Sistema:</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
    )
}

export default MyForm