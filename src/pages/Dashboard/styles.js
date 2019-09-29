import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  height: calc(100% - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    color: #fff;
    font-size: 30px;

    span {
      color: #ff709f;
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
        background: #5b4aff;
        height: 80px;
        width: 80px;
        margin: 0 auto 5px auto;
        border-radius: 4px;
      }
      text-align: center;

      span {
        color: #fff;
      }
    }
  }
`;
