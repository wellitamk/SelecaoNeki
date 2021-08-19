import React, { useState } from "react";
import { Style } from "./style";
import { Link } from "react-router-dom";

function initialState() {
  return {
    usuario: "",
    senha: "",
  };
}


export const Login = () => {
  const [values, setValues] = useState(initialState);

  function onChange(event) {
    const [value, name] = event.target;
    setValues({
      ...values,
      [name]: values,
    });
  }
  

  return (
    <Style>
      <form>
        <h1>Login</h1>
        <input
          id="user"
          type="text"
          name="usuario"
          onChange={onChange}
          value={values.usuario}
          placeholder="Email"
        />
        <br />
        <input
          id="password"
          type="password"
          name="senha"
          onChange={onChange}
          value={values.senha}
          placeholder="Senha"
        />
        <br />
        <button type="submit">Login</button>
        <Link to="/cadastro">Não tem uma conta? Cadastre-se</Link>
      </form>
    </Style>
  );
};
