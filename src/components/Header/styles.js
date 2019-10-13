import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  background: ${colors.secondary};
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #fff;
      margin-left: 20px;
      transition: color 0.2s;

      &:hover {
        color: ${darken(0.09, colors.primary)};
      }
    }

    aside {
      display: flex;
      align-items: center;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  align-items: center;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.6);
      transition: color 0.2s;

      &:hover {
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
