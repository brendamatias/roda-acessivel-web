import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  strong {
    color: #fff;
    margin: 0 auto;
    font-size: 24px;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  footer {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 20px;
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
      color: #ff709f;
      font-size: 16px;
    }

    span {
      display: block;
      margin-top: 3px;
      color: ${props => (props.accessible ? 'green' : '#999')};
    }

    p {
      color: #9e9e9e;
    }
  }
`;

export const Icon = styled.img`
  margin-left: 20px;
  width: 40px;
`;
