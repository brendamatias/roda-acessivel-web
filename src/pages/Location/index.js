import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Description } from './styles';

import local from '~/assets/mirabilandia.jpg';

export default function Location() {
  return (
    <Container>
      <Link to="/">Voltar</Link>
      <img className="img" src={local} alt="" />
      <Description>
        <strong>João da Carne de Sol</strong>
        <span>Acessível</span>
        <p>
          R. Jose Bonifácio, 385 - Madalena, Recife - PE, 50710-510, Brazil -
          (81) 3445-0454
        </p>
        <span>ABERTO</span>
        <span className="span">3,17 km de distância</span>
      </Description>
      <button type="submit">Atualizar perfil</button>
      <div>
        <ul>
          <li>
            <span>Entrada</span>
            <p>Entrada facilitada para pessoas com dificuldade de locomoção.</p>
          </li>
          <li>
            <span>Estacionamento</span>
            <p>Entrada facilitada para pessoas com dificuldade de locomoção.</p>
          </li>
          <li>
            <span>Circulação interna</span>
            <p>Entrada facilitada para pessoas com dificuldade de locomoção.</p>
          </li>
          <li>
            <span>Banheiro acessível</span>
            <p>Entrada facilitada para pessoas com dificuldade de locomoção.</p>
          </li>
          <li>
            <span>Entrada</span>
            <p>Entrada facilitada para pessoas com dificuldade de locomoção.</p>
          </li>
        </ul>
      </div>
    </Container>
  );
}
