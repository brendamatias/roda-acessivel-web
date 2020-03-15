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
    justify-content: space-between;

    img {
      width: 35px;
      margin-right: 10px;
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
  }

  aside {
    display: flex;
    align-items: center;

    button {
      background: ${colors.pink};
      border: none;
      color: #fff;
      padding: 10px 30px;
      border-radius: 4px;
      margin-left: 15px;

      &:hover {
        background: ${darken(0.06, colors.pink)};
      }
    }
  }

  @media (max-width: 767px) {
    a:nth-child(3),
    span {
      display: none;
    }

    aside button {
      margin-left: 5px;
      padding: 10px 20px;
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

    @media (max-width: 767px) {
      strong {
        font-size: 12px;
      }
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

export const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  border-right: 1px solid #eee;
  margin-right: 20px;
  padding-right: 20px;
`;
