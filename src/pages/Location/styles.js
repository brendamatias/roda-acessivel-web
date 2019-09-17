import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  height: 100%;
  max-width: 500px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  position: relative;
  top: -60px;
  max-width: 450px;
  padding: 20px;
  margin: 0 auto;
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 24px;
  }

  p {
    color: #333;
  }

  .span {
    color: #9e9e9e;
  }
`;

export const Description2 = styled.div`
  display: flex;

  div {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a {
      display: block;
      color: #ff709f;
      font-size: 20px;
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
  width: 50px;
`;
