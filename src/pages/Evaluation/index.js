import React, { useState } from 'react';

import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';

import { Container, Note } from './styles';

import api from '~/services/api';

export default function Evaluation(props) {
  const [entry, setEntry] = useState();
  const [parking, setParking] = useState();
  const [circulation, setCirculation] = useState();
  const [bathroom, setBathroom] = useState();
  const locationId = props.match.params.location;

  async function handleSubmit(event) {
    event.preventDefault();
    if (!entry || !parking || !circulation || !bathroom) {
      toast.error('Necessário preenchimento de todas as avaliações');
    } else {
      const response = await api.post('evaluations', {
        entry_note: entry,
        parking_note: parking,
        circulation_note: circulation,
        bathroom_note: bathroom,
        location_id: locationId,
      });

      const { success } = response.data;
      toast.success(success);
    }
  }

  return (
    <Container>
      <strong>Avaliação</strong>
      <Form>
        <div className="content">
          <Note>
            <strong>Acessibilidade de entrada</strong>
            <div>
              <Input
                type="radio"
                name="entry"
                value={entry}
                onChange={() => setEntry('1')}
              />
              <span>1</span>
              <Input
                type="radio"
                name="entry"
                value="2"
                onChange={() => setEntry('2')}
              />
              <span>2</span>
              <Input
                type="radio"
                name="entry"
                value="3"
                onChange={() => setEntry('3')}
              />
              <span>3</span>
              <Input
                type="radio"
                name="entry"
                value="4"
                onChange={() => setEntry('4')}
              />
              <span>4</span>
              <Input
                type="radio"
                name="entry"
                value="5"
                onChange={() => setEntry('5')}
              />
              <span>5</span>
            </div>
          </Note>

          <Note>
            <strong>Acessibilidade estacionamento e/ou manobrista</strong>
            <div>
              <Input
                type="radio"
                name="parking"
                value="1"
                onChange={() => setParking('1')}
              />
              <span>1</span>
              <Input
                type="radio"
                name="parking"
                value="2"
                onChange={() => setParking('2')}
              />
              <span>2</span>
              <Input
                type="radio"
                name="parking"
                value="3"
                onChange={() => setParking('3')}
              />
              <span>3</span>
              <Input
                type="radio"
                name="parking"
                value="4"
                onChange={() => setParking('4')}
              />
              <span>4</span>
              <Input
                type="radio"
                name="parking"
                value="5"
                onChange={() => setParking('5')}
              />
              <span>5</span>
            </div>
          </Note>

          <Note>
            <strong>Acessibilidade circulação interna</strong>
            <div>
              <Input
                type="radio"
                name="circulation"
                value="1"
                onChange={() => setCirculation('1')}
              />
              <span>1</span>
              <Input
                type="radio"
                name="circulation"
                value="2"
                onChange={() => setCirculation('2')}
              />
              <span>2</span>
              <Input
                type="radio"
                name="circulation"
                value="3"
                onChange={() => setCirculation('3')}
              />
              <span>3</span>
              <Input
                type="radio"
                name="circulation"
                value="4"
                onChange={() => setCirculation('4')}
              />
              <span>4</span>
              <Input
                type="radio"
                name="circulation"
                value="5"
                onChange={() => setCirculation('5')}
              />
              <span>5</span>
            </div>
          </Note>

          <Note>
            <strong>Acessibilidade do banheiro</strong>
            <div>
              <Input
                type="radio"
                name="bathroom"
                value="1"
                onChange={() => setBathroom('1')}
              />
              <span>1</span>
              <Input
                type="radio"
                name="bathroom"
                value="2"
                onChange={() => setBathroom('2')}
              />
              <span>2</span>
              <Input
                type="radio"
                name="bathroom"
                value="3"
                onChange={() => setBathroom('3')}
              />
              <span>3</span>
              <Input
                type="radio"
                name="bathroom"
                value="4"
                onChange={() => setBathroom('4')}
              />
              <span>4</span>
              <Input
                type="radio"
                name="bathroom"
                value="5"
                onChange={() => setBathroom('5')}
              />
              <span>5</span>
            </div>
          </Note>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Avaliar
        </button>
      </Form>
    </Container>
  );
}
