import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  height: calc(100% - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  strong {
    color: ${colors.primary};
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
      color: #4e5159;
      margin: 0 0 10px;
      border: 2px solid #dfe5f2;
      font-size: 1rem;
      line-height: 1.25;

      &:focus {
        transition: ease-in-out, border 0.35s ease-in-out;
        border: 2px solid ${colors.secondary};
      }

      &::placeholder {
        color: rgba(0, 0, 0, 0.3);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(0, 0, 0, 0.1);
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

  @media (max-width: 767px) {
    form {
      margin-top: 20px;

      input {
        height: 44px;
        width: 320px;
      }
    }

    > button {
      width: 320px;
    }
  }
`;
