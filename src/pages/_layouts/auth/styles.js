import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.secondary};
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
      padding: 0 15px;
      height: 46px;
      background: #fff;
      border-radius: 4px;
      border: 0.6px solid rgba(0, 0, 0, 0.2);

      color: #4e5159;
      margin: 0 0 10px;
      font-size: 0.9rem;
      line-height: 1.25;

      &:focus {
        transition: ease-in-out, border 0.35s ease-in-out;
      }

      &::placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: ${colors.pink};
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, colors.pink)};
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    a {
      color: #fff;
      margin-top: 20px;
      font-size: 14px;
      align-self: center;
      opacity: 0.8;
      font-weight: bold;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
