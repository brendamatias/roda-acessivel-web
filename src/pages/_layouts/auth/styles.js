import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    max-width: 60%;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(255, 255, 255, 0.1);
      border: 0;
      border-radius: 8px;
      height: 44px;
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

    button {
      margin: 5px 0 0;
      height: 44px;
      background: ${colors.secondary};
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, colors.secondary)};
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    .span {
      color: #90939d;
      margin-top: 20px;
      font-size: 14px;
      align-self: center;

      a {
        color: ${colors.primary};
        opacity: 0.8;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;
