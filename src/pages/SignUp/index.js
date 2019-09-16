import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .required('A senha é obrigatória')
    .min(6, 'Mínimo 6 caracteres'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Roda Acessível" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />
        <button type="submit">Cadastrar </button>
        <span className="span">
          Já tem uma conta? <Link to="/">Entrar agora</Link>
        </span>
      </Form>
    </>
  );
}
