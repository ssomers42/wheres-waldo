import { useState, useEffect } from 'react';
import formatTime from '../utils/formatTime';

const Timer = ({ playing, time, setTime }) => {
  const [seconds, minutes] = formatTime(time);

  let timerStyle;

  if (playing) {
    timerStyle = {
      position: 'absolute',
      bottom: 0,
      backgroundColor: 'white',
      padding: '16px 32px',
    };
  } else {
    timerStyle = {
      color: 'var(--blue)',
      fontWeight: 900,
      fontSize: '64px',
      lineHeight: '77px',
      textShadow:
        '0.05em 0 black, 0 0.05em black, -0.05em 0 black, 0 -0.05em black, -0.05em -0.05em black, -0.05em 0.05em black, 0.05em -0.05em black, 0.05em 0.05em black',
    };
  }

  useEffect(() => {
    let interval;
    if (playing) {
      interval = setInterval(() => {
        setTime((seconds) => seconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [time, playing]);

  return <div style={timerStyle}>{`${minutes}: ${seconds}`}</div>;
};

export default Timer;
