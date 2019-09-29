import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: calc(100% - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  strong {
    color: #fff;
    font-size: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    input {
      background: rgba(255, 255, 255, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      width: 600px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #2ab7d8;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#2AB7D8')};
      }
    }
  }

  > button {
    width: 600px;
    margin: 10px 0 0;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }
  }
`;
