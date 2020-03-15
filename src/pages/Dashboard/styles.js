import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  text-align: center;
  height: calc(100% - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    color: ${colors.primary};
    font-size: 30px;
    font-weight: normal;

    span {
      color: #ff709f;
      font-weight: bold;
    }
  }

  ul {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    justify-content: center;

    li {
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${colors.secondary};
        height: 100px;
        width: 100px;
        margin: 0 auto 5px auto;
        border-radius: 4px;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.06, colors.secondary)};
        }
      }
      text-align: center;

      span {
        color: rgba(0, 0, 0, 0.7);
        font-weight: bold;
      }
    }
  }

  @media (max-width: 767px) {
    ul {
      margin-top: 20px;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 15px;
    }
  }
`;
