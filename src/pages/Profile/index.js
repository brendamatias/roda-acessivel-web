import React from 'react';
import { Form } from '@rocketseat/unform';

import EditProfile from '~/components/EditProfile';
import { Container } from './styles';

export default function Profile() {
  const teste = true;

  return (
    <Container>
      <Form>{teste ? <EditProfile /> : 'Entrar'}</Form>
    </Container>
  );
}
