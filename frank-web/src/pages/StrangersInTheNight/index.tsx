import React, { useCallback, useState } from 'react';

import ReactAudioPlayer from 'react-audio-player';
import { Container, Footer, Line, Content } from './styles';

import disc from '../../assets/cd.svg';
import frank3 from '../../assets/frank3.png';
import StrangersInTheNightMusic from '../../assets/StrangersInTheNight.mp3';
import api from '../../services/api';

const StrangersInTheNight: React.FC = () => {
  const [isCoded, setIsCoded] = useState<Array<string>>();

  const handleSubmit = useCallback(async () => {
    const music = {
      text: [
        'Strangers in the night exchanging glances',
        'Wondering in the night',
        "What were the chances we'd be sharing love",
        'Before the night was through',
        '',
        'Something in your eyes was so inviting',
        'Something in your smile was so exciting',
        'Something in my heart',
        'Told me I must have you',
        '',
        'Strangers in the night, two lonely people',
        'We were strangers in the night',
        'Up to the moment',
        'When we said our first hello',
        'Little did we know',
        'Love was just a glance away',
        'A warm embracing dance away and',
        '',
        "Ever since that night we've been together",
        'Lovers at first sight, in love forever',
        'It turned out so right',
        'For strangers in the night',
      ],
    };

    const response = await api.post('/api/convert', music);
    setIsCoded(response.data.coded);
    const newArray = response.data.coded;
    setIsCoded(newArray);
  }, []);
  return (
    <Container>
      <ReactAudioPlayer src={StrangersInTheNightMusic} autoPlay loop />
      <Content>
        <img src={frank3} alt="frank" />

        <span>
          {!isCoded ? (
            <div>
              <h1>Strangers In The Night</h1>
              <p>Strangers in the night exchanging glances</p>
              <p>Wondering in the night</p>
              <p>What were the chances we'd be sharing love</p>
              <p>Before the night was through</p>
              <br />
              <p>Something in your eyes was so inviting</p>
              <p>Something in your smile was so exciting</p>
              <p>Something in my heart</p>
              <p>Told me I must have you</p>
              <br />
              <p>Strangers in the night, two lonely people</p>
              <p>We were strangers in the night</p>
              <p>Up to the moment</p>
              <p>When we said our first hello</p>
              <p>Little did we know</p>
              <p>Love was just a glance away</p>
              <p>A warm embracing dance away and</p>
              <br />
              <p>Ever since that night we've been together</p>
              <p>Lovers at first sight, in love forever</p>
              <p>It turned out so right</p>
              <p>For strangers in the night</p>
              <br />

              <button type="button" onClick={handleSubmit}>
                Huffman
              </button>
            </div>
          ) : (
            <p />
          )}

          <div>{!!isCoded && isCoded.map((coded) => <p>{coded}</p>)}</div>
        </span>
      </Content>

      <Line />

      <Footer>
        <h1>Frank</h1>
        <img src={disc} alt="disc" />
        <h1>Huffman</h1>
      </Footer>
    </Container>
  );
};

export default StrangersInTheNight;
