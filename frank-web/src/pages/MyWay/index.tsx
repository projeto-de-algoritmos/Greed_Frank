import React from 'react';

import { Container, Header, Line, Content, Footer } from './styles';

import disc from '../../assets/cd.svg';
import musicOne from '../../assets/musicOne.svg';

const MyWay: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Frank</h1>
        <img src={disc} alt="disc" />
        <h1>Huffman</h1>
      </Header>
      <Line />

      <Content>
        <img src={musicOne} alt="musicOne" />
        <span>
          <div>
            <h1>My Way</h1>
            <p>And now, the end is near</p>
            <p>And so I face the final curtain</p>
            <p>My friend, I'll make it clear</p>
            <p>I'll state my case, of which I'm certain</p>
            <p>I've lived a life that's full</p>
            <p>I travelled each and every highway</p>
            <p>And more, much more than this</p>
            <p>I did it my way</p>
            <br />
            <p>Regrets, I've had a few</p>
            <p>But then again, too few to mention</p>
            <p>I did what I had to do</p>
            <p>And saw it through without exemption</p>
            <p>I planned each charted course</p>
            <p>Each careful step along the byway</p>
            <p>And more, much more than this</p>
            <p>I did it my way</p>
            <br />
            <p>Yes, there were times</p>
            <p>I'm sure you knew</p>
            <p>When I bit off</p>
            <p>More than I could chew</p>
            <p>But through it all</p>
            <p>When there was doubt</p>
            <p>I ate it up and spit it out</p>
            <p>I faced it all and I stood tall</p>
            <p>And did it my way</p>
            <br />
            <p>I've loved, I've laughed and cried</p>
            <p>I've had my fill, my share of losing</p>
            <p>And now, as tears subside</p>
            <p>I find it all so amusing</p>
            <p>To think I did all that</p>
            <p>And may I say, not in a shy way</p>
            <p>Oh, no, oh, no, not me, I did it my way</p>
            <br />
            <p>For what is a man, what has he got?</p>
            <p>If not himself, then he has naught</p>
            <p>To say the things he truly feels</p>
            <p>And not the words of one who kneels</p>
            <p>The record shows I took the blows</p>
            <p>And did it my way</p>

            <button type="button">Huffman</button>
          </div>
          <div>
            <h1>My Way</h1>
            <p>And now, the end is near</p>
            <p>And so I face the final curtain</p>
            <p>My friend, I'll make it clear</p>
            <p>I'll state my case, of which I'm certain</p>
            <p>I've lived a life that's full</p>
            <p>I travelled each and every highway</p>
            <p>And more, much more than this</p>
            <p>I did it my way</p>
            <br />
            <p>Regrets, I've had a few</p>
            <p>But then again, too few to mention</p>
            <p>I did what I had to do</p>
            <p>And saw it through without exemption</p>
            <p>I planned each charted course</p>
            <p>Each careful step along the byway</p>
            <p>And more, much more than this</p>
            <p>I did it my way</p>
            <br />
            <p>Yes, there were times</p>
            <p>I'm sure you knew</p>
            <p>When I bit off</p>
            <p>More than I could chew</p>
            <p>But through it all</p>
            <p>When there was doubt</p>
            <p>I ate it up and spit it out</p>
            <p>I faced it all and I stood tall</p>
            <p>And did it my way</p>
            <br />
            <p>I've loved, I've laughed and cried</p>
            <p>I've had my fill, my share of losing</p>
            <p>And now, as tears subside</p>
            <p>I find it all so amusing</p>
            <p>To think I did all that</p>
            <p>And may I say, not in a shy way</p>
            <p>Oh, no, oh, no, not me, I did it my way</p>
            <br />
            <p>For what is a man, what has he got?</p>
            <p>If not himself, then he has naught</p>
            <p>To say the things he truly feels</p>
            <p>And not the words of one who kneels</p>
            <p>The record shows I took the blows</p>
            <p>And did it my way</p>
          </div>
        </span>
      </Content>
      <Line />
      <Footer />
    </Container>
  );
};

export default MyWay;
