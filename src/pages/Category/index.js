import React, { useState, useRef, useEffect } from 'react';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import api from '~/services/api';

import { Container, Location, Description, Icon } from './styles';

import local from '~/assets/mirabilandia.jpg';
import acessivel from '~/assets/placeholder-filled-tool-shape-for-maps@4x.svg';

export default function Category(props) {
  const [locations, setLocations] = useState([]);

  const [page, setPage] = useState(1);

  const ref = useRef();

  useEffect(() => {
    async function loadLocations() {
      const response = await api.get(
        `categories/${props.match.params.category}?page=${page}`
      );
      setLocations(response.data);
    }

    loadLocations();
  }, [locations.path, page, props, ref]);

  function handlePrevPage() {
    if (!(page - 1 <= 0)) {
      setPage(page - 1);
    }
  }

  function handleNextPage() {
    setPage(page + 1);
  }

  return (
    <Container>
      <strong>Guia de Recife</strong>
      <ul>
        {locations.map(location => (
          <Location key={location.id}>
            <Description>
              <img className="img" src={local} alt="" />
              <div>
                <Link
                  to={`/location/${location.id}`}
                  params={{ location: location.id }}
                >
                  {location.name}
                </Link>
                <p>
                  <span>Acessível</span> 3,18km
                </p>
              </div>
            </Description>
            <Icon src={acessivel} alt="" />
          </Location>
        ))}
      </ul>
      <footer>
        <button type="button" onClick={handlePrevPage}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{page}</strong>
        <button type="button" onClick={handleNextPage}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </footer>
    </Container>
  );
}
