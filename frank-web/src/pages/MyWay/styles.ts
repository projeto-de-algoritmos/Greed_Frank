import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 215px;
  background: #2bd4df;

  h1 {
    font-size: 64px;
  }

  img {
    margin: 0 20px;
  }
`;

export const Line = styled.div`
  display: flex;
  width: 100%;
  height: 3px;
  background: #fcfcfc;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 90px;

  h1 {
    font-size: 48px;
    line-height: 1.6;
    color: #2bd4df;
  }

  img {
    margin-top: 90px;
  }
  span {
    display: flex;
    margin-top: 70px;

    > div {
      margin-right: 250px;

      button {
        margin-top: 20px;
        height: 50px;
        width: 350px;
        background: #2bd4df;
        color: #fcfcfc;
        font-size: 24px;
        font-weight: bold;
        border-radius: 10px;
        outline: none;
        border: none;

        :hover {
          background: #fcf;
        }
      }
    }

    div {
      margin-left: 250px;
      p {
        font-size: 20px;
        line-height: 1.4;
      }
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
  background: #2bd4df;
`;
