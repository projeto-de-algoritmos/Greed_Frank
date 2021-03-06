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
  margin-top: 35px;

  div {
    cursor: pointer;
    margin-top: 50px;
    margin-bottom: 60px;
    transition: all 0.2s;

    img:first-child {
      margin-right: 100px;
    }

    img {
      &:hover {
        filter: hue-rotate(93deg);
      }
    }
  }

  span {
    transition: all 0.2s;
    cursor: pointer;
    img:first-child {
      margin-right: 100px;
    }

    img {
      &:hover {
        filter: hue-rotate(93deg);
      }
    }
  }
`;
