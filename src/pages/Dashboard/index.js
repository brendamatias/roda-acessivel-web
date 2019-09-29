import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import sobre from '~/assets/categorias/sobre.svg';
import transporte from '~/assets/categorias/transporte.svg';
import praias from '~/assets/categorias/praias.svg';
import gastronomia from '~/assets/categorias/gastronomia.svg';
import hospedagens from '~/assets/categorias/hospedagens.svg';
import passeios from '~/assets/categorias/passeios.svg';
import diversao from '~/assets/categorias/diversao.svg';
import pontoshistoricos from '~/assets/categorias/pontoshistoricos.svg';
import compras from '~/assets/categorias/compras.svg';

export default function Dashboard() {
  const categorias = [
    {
      id: 1,
      title: 'Sobre Recife',
      image: sobre,
    },
    {
      id: 2,
      title: 'Transporte',
      image: transporte,
    },
    {
      id: 3,
      title: 'Praias',
      image: praias,
    },
    {
      id: 4,
      title: 'Gastronomia',
      image: gastronomia,
    },
    {
      id: 5,
      title: 'Hospedagens',
      image: hospedagens,
    },
    {
      id: 6,
      title: 'Passeios',
      image: passeios,
    },
    {
      id: 7,
      title: 'Diversão',
      image: diversao,
    },
    {
      id: 8,
      title: 'Pontos Históricos',
      image: pontoshistoricos,
    },
    {
      id: 9,
      title: 'Compras',
      image: compras,
    },
  ];

  return (
    <Container>
      <strong>
        Guia de <span>Recife</span>
      </strong>
      <ul>
        {categorias.map(categoria => (
          <li key={categoria.id}>
            <Link
              to={`/dashboard/${categoria.id}`}
              params={{ category: categoria.id }}
            >
              <div>
                <img src={categoria.image} alt={categoria.title} />
              </div>
              <span>{categoria.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
