import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ user }) => {
  //Controlled Inputs

  // Gerenciamento de Dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviado o formulário");
    console.log("Nome: ", name);
    console.log("Email: ", email);
    console.log("Bio: ", bio);
    console.log("Role: ", role);

    // Limpar Formulário
    setName("");
    setEmail("");
    setBio("");
  };
  return (
    <div>
      {/*Envio de Form*/}
      {/*Criação da Form*/}
      <form onSubmit={handleSubmit}>
        <div htmlFor="name">
          Nome:
          <input
            type="text"
            name="name"
            placeholder="Seu Nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/*Label envolvendo Input*/}
        <label>
          <span>E-mail:</span>
          {/*Simplificação de manipulação de State*/}
          <input
            type="email"
            name="email"
            placeholder="Seu E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/*Textarea*/}
        <label>
          <span>Bio</span>
          <textarea
            name="bio"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            placeholder="Descrição do usuário"
            cols="30"
            rows="10"
          ></textarea>
        </label>
        {/*Select*/}
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
