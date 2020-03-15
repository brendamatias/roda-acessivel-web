import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import api from '~/services/api';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import Loading from '../../components/Loading';

import { Container, List, Description, Image, Icon } from './styles';

import accessible from '~/assets/accessibility/accessible.svg';
import not_accessible from '~/assets/accessibility/not-accessible.svg';
import partially_accessible from '~/assets/accessibility/partially-accessible.svg';
import not_rated from '~/assets/accessibility/not-rated.svg';

export default function Category({ match }) {
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const categoryId = match.params.category;

  function returnAccessibility(location) {
    let accessibility =
      parseInt(location.entry_note, 10) +
      parseInt(location.parking_note, 10) +
      parseInt(location.circulation_note, 10) +
      parseInt(location.bathroom_note, 10);

    accessibility /= 4;

    return accessibility;
  }

  useEffect(() => {
    async function loadLocations() {
      setLoading(true);

      const { data } = await api.get(`categories/${categoryId}`, {
        params: {
          page,
        },
      });

      const locations = data.locations.map(location => ({
        ...location,
        accessibility: returnAccessibility(location),
      }));

      setLocations(locations);
      setTotal(data.total);
      setLoading(false);
    }
    loadLocations();
  }, [categoryId, page]);

  async function handlePageChange(next) {
    console.log(page);
    console.log(next);
    const nextPage = page + (next ? 1 : -1);

    setPage(nextPage);
  }

  function returnParameters(accessibility, params) {
    /* Acessível */
    if (accessibility >= 4) {
      if (params === 'src') {
        return accessible;
      }

      return 'ACESSÍVEL';
    }

    /* Parcialmente Acessível */
    if (accessibility > 2) {
      if (params === 'src') {
        return partially_accessible;
      }

      return 'PARCIALMENTE ACESSÍVEL';
    }

    /* Não Acessível */
    if (accessibility > 0) {
      if (params === 'src') {
        return not_accessible;
      }

      return 'NÃO ACESSÍVEL';
    }

    /* Não Avaliado */

    if (params === 'src') {
      return not_rated;
    }

    return 'NÃO AVALIADO';
  }

  return (
    <Container>
      <header>
        <strong>
          Guia de <span>Recife</span>
        </strong>
      </header>
      <List>
        {loading ? (
          <Loading />
        ) : (
          <>
            {locations.length > 0 ? (
              <>
                {locations.map(location => (
                  <li key={location.id}>
                    <Description>
                      <Image src={location.image.url} />
                      <div>
                        <Link
                          to={`/details/${location.id}`}
                          params={{ location: location.id }}
                        >
                          {location.name}
                        </Link>
                        <p>
                          <span>
                            {returnParameters(location.accessibility, 'title')}
                          </span>
                          3,18km
                        </p>
                      </div>
                    </Description>
                    <Icon
                      src={returnParameters(location.accessibility, 'src')}
                      alt={returnParameters(location.accessibility, 'title')}
                    />
                  </li>
                ))}
              </>
            ) : <span className="span">Ops, localizações ainda não cadastradas :(</span>}
          </>
        )}
      </List>
      <footer>
        {page > 1 &&  (
          <button type="button" onClick={() => handlePageChange(false)}>
            <MdChevronLeft size={36} color="#000" />
          </button>
        )}
        <strong>{page}</strong>
        {locations.length > 0 && total > page * 4 && (
          <button type="button" onClick={() => handlePageChange(true)}>
            <MdChevronRight size={36} color="#000" />
          </button>
        )}
      </footer>
    </Container>
  );
}

Category.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
