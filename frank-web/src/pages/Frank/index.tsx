import React from 'react';

import { Link, useHistory } from 'react-router-dom';
import { Container, Header, Line, Content } from './styles';

import disc from '../../assets/cd.svg';
import musicOne from '../../assets/musicOne.svg';
import musicTwo from '../../assets/musicTwo.svg';
import musicThree from '../../assets/musicThree.svg';
import musicFour from '../../assets/musicFour.svg';

const Frank: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Frank</h1>
        <img src={disc} alt="disc" />
        <h1>Huffman</h1>
      </Header>
      <Line />

      <Content>
        <div>
          <Link to="/musicOne">
            <img src={musicOne} alt="musicOne" />
          </Link>

          <Link to="/musicTwo">
            <img src={musicTwo} alt="musicTwo" />
          </Link>
        </div>

        <span>
          <Link to="/musicThree">
            <img src={musicThree} alt="musicThree" />
          </Link>

          <Link to="/musicFour">
            <img src={musicFour} alt="musicFour" />
          </Link>
        </span>
      </Content>
    </Container>
  );
};

export default Frank;
