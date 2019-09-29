import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  text-align: center;
  height: calc(100% - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    margin-top: 40px;
  }

  strong {
    color: #fff;
    font-size: 30px;
  }

  .content {
    background: #fff;
    border-radius: 4px;
    padding: 40px;
  }

  button {
    margin-top: 15px;
    width: 100%;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.06, '#f64c75')};
    }
  }
`;

export const Note = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  div {
    margin: 10px 0;
  }

  strong {
    font-size: 16px;
    color: #ff709f;
  }

  input {
    border: 1px solid #ff709f;
  }

  span {
    margin: 0 10px;
  }

  /*color: #ff709f;*/
`;
