import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Container, Description, Accessible, Circle } from './styles';

import api from '~/services/api';

import local from '~/assets/mirabilandia.jpg';

export default function Location(props) {
  const [location, setLocation] = useState([]);
  const [address, setAddress] = useState([]);
  const [entry, setEntry] = useState([]);
  const [parking, setParking] = useState([]);
  const [circulation, setCirculation] = useState([]);
  const [bathroom, setBathroom] = useState([]);

  const locationId = props.match.params.location;

  function retornaCor(available) {
    if (available >= 4) {
      return '#2D9900';
    }
    if (available > 2) {
      return '#EAD300';
    }
    if (available >= 1) {
      return '#9E0000';
    }
    return '#C1C1C1';
  }

  useEffect(() => {
    async function loadLocation() {
      const response = await api.get(`locations/${locationId}`);

      setLocation(response.data[0]);
      setAddress(response.data[0].address);

      const entry_note = parseInt(response.data[0].entry_note, 10);
      const parking_note = parseInt(response.data[0].parking_note, 10);
      const circulation_note = parseInt(response.data[0].circulation_note, 10);
      const bathroom_note = parseInt(response.data[0].bathroom_note, 10);

      setEntry(retornaCor(entry_note));
      setParking(retornaCor(parking_note));
      setCirculation(retornaCor(circulation_note));
      setBathroom(retornaCor(bathroom_note));
    }

    loadLocation();
  }, [locationId, props]);

  return (
    <Container>
      <Link to="/dashboard">Voltar</Link>
      <img className="img" src={local} alt="" />
      <Description>
        <strong>{location.name}</strong>
        <span>ACESSÍVEL</span>
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
        onClick={() => props.history.push(`/evaluation/${locationId}`)}
        type="submit"
      >
        Avaliar
      </button>
      <Accessible>
        <ul>
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
            <p>Entrada facilitada para pessoas com dificuldade de locomoção.</p>
          </li>
          <li>
            <strong>
              Circulação interna <Circle background={circulation} />
            </strong>
            <p>Entrada facilitada para pessoas com dificuldade de locomoção.</p>
          </li>
          <li>
            <strong>
              Banheiro acessível <Circle background={bathroom} />
            </strong>
            <p>Entrada facilitada para pessoas com dificuldade de locomoção.</p>
          </li>
        </ul>
      </Accessible>
    </Container>
  );
}
