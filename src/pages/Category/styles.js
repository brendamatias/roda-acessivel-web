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

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
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

export const Location = styled.li`
  padding-right: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  justify-content: space-between;

  .img {
    width: 120px;
    height: 120px;
    border-radius: 4px 0 0 4px;
  }
`;

export const Description = styled.div`
  display: flex;

  div {
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

export const Icon = styled.img`
  margin-left: 20px;
  width: 40px;
`;
