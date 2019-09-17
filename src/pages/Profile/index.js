import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Select } from '@rocketseat/unform';

import { signOut } from '~/store/modules/auth/actions';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

const options = [
  {
    value: 'F',
    name: 'Feminino',
  },
  {
    value: 'M',
    name: 'Masculino',
  },
  {
    value: 'O',
    name: 'Outros',
  },
];

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />
        <Input name="email" placeholder="Email" />
        <hr />
        <Input
          type="date"
          name="date_of_birth"
          placeholder="Data de Nascimento"
        />

        <Select name="gender" options={options} value={options.value} />

        <hr />
        <Input type="password" name="oldPassword" placeholder="Senha atual" />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="submit" onClick={handleSignOut}>
        Sair
      </button>
    </Container>
  );
}
