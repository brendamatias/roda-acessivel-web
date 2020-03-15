import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  header {
    strong {
      color: ${colors.primary};
      font-size: 30px;
      font-weight: normal;

      span {
        color: #ff709f;
        font-weight: bold;
      }
    }
  }

  footer {
    display: flex;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #000;
      font-size: 24px;
      margin: 0 20px;
      font-weight: bold;
    }
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 20px;
  margin-top: 30px;

  /*
    Tela inteira: 100vh
    Header: 64px
    Margin Top Container + List: 80px + 30px
    Título: 37px
    Div da páginação: 70px
  */

  height: calc(100vh - 64px - 80px - 30px - 37px - 70px);

  li {
    padding-right: 20px;
    border-radius: 4px;
    max-width: 450px;
    height: 120px;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }

  .span {
    display: flex;
    align-items: center;
    font-size: 40px;
    max-width: 430px;
    text-align: center;
    font-weight: bold;
    color: ${colors.pink}
  }
`;

export const Description = styled.div`
  display: flex;

  div:last-child {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;

    a {
      display: block;
      color: ${colors.secondary};
      font-size: 20px;
      font-weight: bold;
    }

    p {
      color: rgba(0, 0, 0, 0.4);

      span {
        display: block;
        margin-top: 3px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
        font-weight: bold;
      }
    }
  }
`;

export const Image = styled.div`
  width: 120px;
  height: 120px;
  background: url(${props => props.src}) center center no-repeat;
  background-size: 250px;
  border-radius: 4px 0 0 4px;
`;

export const Icon = styled.img`
  display: block;
  margin-left: 20px;
  width: 40px;
`;
