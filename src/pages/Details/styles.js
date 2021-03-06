import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  margin: 80px auto;

  a {
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
    font-weight: bold;
    color: #f64c75;
  }

  img {
    height: 200px;
    width: 100%;
    border-radius: 2px;
  }

  button {
    width: 100%;
    margin: 10px 0 0;
    padding: 12px 0;
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
    margin: 40px 22px;

    img {
      height: 180px;
      margin: 0 auto;
    }
  }
`;

export const Description = styled.div`
  position: relative;
  top: -30px;
  width: 450px;
  padding: 20px;
  margin: 0 auto;
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #dbdbdb;

  span {
    font-size: 12px;
  }

  strong {
    font-size: 24px;
    color: #333333;
  }

  p {
    color: #333;
  }

  .span {
    color: #9e9e9e;
  }

  .endereco {
    margin: 15px 0;

    p {
      margin: 1px 0;
    }
  }

  .open {
    color: #2d9900;
  }

  @media (max-width: 767px) {
    width: 300px;
    padding: 15px;

    span {
      font-size: 11px;
    }

    strong {
      font-size: 18px;
      color: #333333;
    }

    p {
      font-size: 13px;
    }
  }
`;

export const Accessibility = styled.ul`
  margin-top: 20px;
  background: #fff;
  padding: 50px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;

  li {
    color: #333333;
    border-bottom: 1px solid #eee;
    padding: 15px 0;

    span {
      display: flex;
      align-items: center;
      padding-bottom: 10px;

      &::after {
        margin-left: 12px;
        display: block;
        content: '';
        border-radius: 100%;
        width: 15px;
        height: 15px;
        background: black;
      }
    }

    strong {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
    }
  }

  @media (max-width: 767px) {
    padding: 30px;
  }
`;

export const Circle = styled.div`
  margin-left: 12px;
  display: block;
  content: '';
  border-radius: 100%;
  width: 15px;
  height: 15px;
  background: ${props => props.background};
`;
