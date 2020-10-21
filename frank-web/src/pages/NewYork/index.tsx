import React, { useCallback, useState } from 'react';

import ReactAudioPlayer from 'react-audio-player';
import { Container, Footer, Line, Content } from './styles';

import disc from '../../assets/cd.svg';
import frank from '../../assets/frank.png';
import NewYorkMusic from '../../assets/NewYorkMusic.mp3';
import api from '../../services/api';

const NewYork: React.FC = () => {
  const [isCoded, setIsCoded] = useState<Array<string>>();

  const handleSubmit = useCallback(async () => {
    const music = {
      text: [
        'Start spreading the news',
        "I'm leaving today",
        'I want to be a part of it',
        'New York, New York',
        '',
        'These vagabond shoes',
        'Are longing to stray',
        'Right through the very heart of it',
        'New York, New York',
        '',
        'I wanna wake up in that city',
        "That doesn't sleep",
        "And find I'm king of the hill",
        'Top of the heap',
        '',
        'These little town blues',
        'Are melting away',
        "I'll make a brand new start of it",
        'In a old New York',
        '',
        'If I can make it there',
        "I'll make it anywhere",
        "It's up to you",
        'New York, New York',
        '',
        'New York, New York',
        'I want to wake up',
        'In the city that never sleeps',
        "And find I'm A, number one, top of the list",
        'King of the hill',
        'A number one',
        '',
        'These little town blues',
        'Are melting away',
        "I'm gonna make a brand new start of it",
        'In old New York',
        '',
        'And',
        'If I can make it there',
        "I'm gonna make it anywhere",
        "It's up to you",
        'New York, New York, New York',
      ],
    };

    const response = await api.post('/api/convert', music);
    setIsCoded(response.data.coded);
    const newArray = response.data.coded;
    setIsCoded(newArray);
  }, []);
  return (
    <Container>
      <ReactAudioPlayer src={NewYorkMusic} autoPlay loop />
      <Content>
        <img src={frank} alt="frank" />

        <span>
          {!isCoded ? (
            <div>
              <h1>New York, New York</h1>
              <p>Start spreading the news</p>
              <p>I'm leaving today</p>
              <p>I want to be a part of it</p>
              <p>New York, New York</p>
              <br />
              <p>These vagabond shoes</p>
              <p>Are longing to stray</p>
              <p>Right through the very heart of it</p>
              <p>New York, New York</p>
              <br />
              <p>I wanna wake up in that city</p>
              <p>That doesn't sleep</p>
              <p>And find I'm king of the hill</p>
              <p>Top of the heap</p>
              <br />
              <p>These little town blues</p>
              <p>Are melting away</p>
              <p>I'll make a brand new start of it</p>
              <p>In a old New York</p>
              <br />
              <p>If I can make it there</p>
              <p>I'll make it anywhere</p>
              <p>It's up to you </p>
              <p>New York, New York</p>
              <br />
              <p>New York, New York</p>
              <p>I want to wake up</p>
              <p>In the city that never sleeps</p>
              <p>And find I'm A, number one, top of the list</p>
              <p>King of the hill</p>
              <p>A number one</p>
              <br />
              <p>These little town blues</p>
              <p>Are melting away</p>
              <p>I'm gonna make a brand new start of it</p>
              <p>In old New York</p>
              <br />
              <p>And</p>
              <p>If I can make it there</p>
              <p>I'm gonna make it anywhere</p>
              <p>It's up to you</p>
              <p>New York, New York, New York</p>

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

export default NewYork;
