import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import praias from '~/assets/categories/praias.svg';
import gastronomia from '~/assets/categories/gastronomia.svg';
import hospedagens from '~/assets/categories/hospedagens.svg';
import diversao from '~/assets/categories/diversao.svg';
import pontoshistoricos from '~/assets/categories/pontoshistoricos.svg';
import compras from '~/assets/categories/compras.svg';

export default function Dashboard() {
  const categories = [
    {
      id: 1,
      title: 'Gastronomia',
      image: gastronomia,
    },
    {
      id: 2,
      title: 'Hospedagens',
      image: hospedagens,
    },
    {
      id: 3,
      title: 'Praias',
      image: praias,
    },
    {
      id: 4,
      title: 'Pontos Históricos',
      image: pontoshistoricos,
    },
    {
      id: 5,
      title: 'Diversão',
      image: diversao,
    },
    {
      id: 6,
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
        {categories.map(category => (
          <li key={category.id}>
            <Link
              to={`/dashboard/${category.id}`}
              params={{ category: category.id }}
            >
              <div>
                <img src={category.image} alt={category.title} />
              </div>
              <span>{category.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
