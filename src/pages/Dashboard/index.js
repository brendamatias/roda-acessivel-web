import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import sobre from '~/assets/categories/sobre.svg';
import transporte from '~/assets/categories/transporte.svg';
import praias from '~/assets/categories/praias.svg';
import gastronomia from '~/assets/categories/gastronomia.svg';
import hospedagens from '~/assets/categories/hospedagens.svg';
import passeios from '~/assets/categories/passeios.svg';
import diversao from '~/assets/categories/diversao.svg';
import pontoshistoricos from '~/assets/categories/pontoshistoricos.svg';
import compras from '~/assets/categories/compras.svg';

export default function Dashboard() {
  const categories = [
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
