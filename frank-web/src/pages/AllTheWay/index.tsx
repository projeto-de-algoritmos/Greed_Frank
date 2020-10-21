import React, { useCallback, useState, useEffect } from 'react';

import ReactAudioPlayer from 'react-audio-player';
import { Container, Footer, Line, Content } from './styles';

import disc from '../../assets/cd.svg';
import frank4 from '../../assets/frank4.png';
import AllTheWayMusic from '../../assets/AllTheWay.mp3';
import api from '../../services/api';

const AllTheWay: React.FC = () => {
  const [isCoded, setIsCoded] = useState<Array<string>>();

  const handleSubmit = useCallback(async () => {
    const music = {
      text: [
        'When somebody loves you',
        'Its no good unless he loves you..',
        'All the way',
        'Happy to be near you',
        'When you need someone to cheer you',
        'All the way',
        '',
        'Taller than the tallest tree is',
        'Thats how its got to feel',
        'Deeper than the deep blue sea is',
        'Thats how deep it goes if its real',
        '',
        'When somebody needs you',
        'Its no good unless he needs you',
        'All the way',
        '',
        'Through the good or lean years',
        'And for all those in between years',
        'Come what may',
        '',
        'Who knows where the road will lead us',
        'Only a fool would say',
        'But if you let me love you',
        "Its for sure I'm gonna love you",
        'All the way',
        '',
        'All the way....',
        '',
        'So if you let me love you',
        "Its for sure I'm gonna love you",
        'All the way',
        'All.. The ... Way......',
      ],
    };

    const response = await api.post('/api/convert', music);
    setIsCoded(response.data.coded);
    const newArray = response.data.coded;
    setIsCoded(newArray);
  }, []);

  return (
    <Container>
      <ReactAudioPlayer src={AllTheWayMusic} autoPlay loop />
      <Content>
        <img src={frank4} alt="frank" />

        <span>
          {!isCoded ? (
            <div>
              <h1>All The Way</h1>
              <p>When somebody loves you</p>
              <p>Its no good unless he loves you..</p>
              <p>All the way</p>
              <p>Happy to be near you</p>
              <p>When you need someone to cheer you</p>
              <p>All the way</p>
              <br />
              <p>Taller than the tallest tree is</p>
              <p>Thats how its got to feel</p>
              <p>Deeper than the deep blue sea is</p>
              <p>Thats how deep it goes if its real</p>
              <br />
              <p>When somebody needs you</p>
              <p>Its no good unless he needs you</p>
              <p>All the way</p>
              <br />
              <p>Through the good or lean years</p>
              <p>And for all those in between years</p>
              <p>Come what may</p>
              <br />
              <p>Who knows where the road will lead us'</p>
              <p> Only a fool would say</p>
              <p>But if you let me love you</p>
              <p>Its for sure I'm gonna love you</p>
              <p>All the way</p>
              <br />
              <p>All the way....</p>
              <br />
              <p>So if you let me love you</p>
              <p>Its for sure I'm gonna love you</p>
              <p>All the way</p>
              <p>All.. The ... Way......</p>

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

export default AllTheWay;
