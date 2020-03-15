import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Container, Description, Accessibility, Circle } from './styles';

import api from '~/services/api';
import colors from '~/styles/colors';

export default function Details({ match, history }) {
  const [location, setLocation] = useState([]);
  const [accessibility, setAccessibility] = useState([]);

  const [address, setAddress] = useState([]);
  const [image, setImage] = useState([]);
  const [entry, setEntry] = useState([]);
  const [parking, setParking] = useState([]);
  const [circulation, setCirculation] = useState([]);
  const [bathroom, setBathroom] = useState([]);

  const locationId = match.params.location;

  function returnColor(available) {
    if (available >= 4) {
      return colors.green;
    }
    if (available > 2) {
      return colors.yellow;
    }
    if (available >= 1) {
      return colors.red;
    }

    return colors.default;
  }

  function returnParameters() {
    if (accessibility >= 4) {
      return 'ACESSÍVEL';
    }

    if (accessibility > 2) {
      return 'PARCIALMENTE ACESSÍVEL';
    }

    if (accessibility > 0) {
      return 'NÃO ACESSÍVEL';
    }

    return 'NÃO AVALIADO';
  }

  useEffect(() => {
    function returnAccessibility(data) {
      let result =
        parseInt(data.entry_note, 10) +
        parseInt(data.parking_note, 10) +
        parseInt(data.circulation_note, 10) +
        parseInt(data.bathroom_note, 10);

      result /= 4;

      return result;
    }

    async function loadLocation() {
      const response = await api.get(`locations/${locationId}`);

      setLocation(response.data[0]);
      setAccessibility(returnAccessibility(location));

      setAddress(response.data[0].address);
      setImage(response.data[0].image.url);

      const entry_note = parseInt(response.data[0].entry_note, 10);
      const parking_note = parseInt(response.data[0].parking_note, 10);
      const circulation_note = parseInt(response.data[0].circulation_note, 10);
      const bathroom_note = parseInt(response.data[0].bathroom_note, 10);

      setEntry(returnColor(entry_note));
      setParking(returnColor(parking_note));
      setCirculation(returnColor(circulation_note));
      setBathroom(returnColor(bathroom_note));
    }

    loadLocation();
  }, [location, locationId]);

  return (
    <Container>
      <Link to="/dashboard">Voltar</Link>
      <img className="img" src={image} alt={location.title} />
      <Description>
        <strong>{location.name}</strong>
        <span>{returnParameters(accessibility)}</span>
        <div className="endereco">
          <p>
            {address.street}, {address.number} - {address.neighborhood}
          </p>
          <p>
            {address.city} - {address.state}, {address.zip_code}
          </p>
        </div>
        <span className="open">ABERTO</span>
        <span className="span">3,17 km de distância</span>
      </Description>
      <button
        onClick={() => history.push(`/evaluation/${locationId}`)}
        type="submit"
      >
        Avaliar
      </button>
      <Accessibility>
        <li>
          <strong>
            Entrada <Circle background={entry} />
          </strong>
          <p>Entrada facilitada para pessoas com dificuldade de locomoção.</p>
        </li>
        <li>
          <strong>
            Estacionamento <Circle background={parking} />
          </strong>
          <p>Estacionamento acessível para pessoas com dificuldade de locomoção.</p>
        </li>
        <li>
          <strong>
            Circulação interna <Circle background={circulation} />
          </strong>
          <p>Circulação interna facilitada para pessoas com dificuldade de locomoção.</p>
        </li>
        <li>
          <strong>
            Banheiro acessível <Circle background={bathroom} />
          </strong>
          <p>Banheiro acessível para pessoas com dificuldade de locomoção.</p>
        </li>
      </Accessibility>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      location: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
