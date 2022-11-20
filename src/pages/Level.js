import levels from '../levels';
import { useState, useEffect } from 'react';

const Level = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  let { levelName, img, xStart, xEnd, yStart, yEnd } = levels[currentLevel];

  const levelStyle = {
    imageStyle: { backgroundColor: 'black', maxWidth: '100vw' },
    containerStyle: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    textStyle: {
      position: 'absolute',
      top: 0,
      backgroundColor: 'white',
      padding: '16px 32px',
    },
  };

  const checkForCage = (e) => {
    //TODO: Include width and/or height calculation for fullscreen images

    //get coords for the image on screen
    let image = document.querySelector('#image');
    var rect = image.getBoundingClientRect();

    //get absolute click location using the images distance from the browser's X0, Y0
    let absX = Math.floor(e.clientX - rect.left);
    let absY = Math.floor(e.clientY - rect.top);

    //use absolute coords to check if the cursor is on the image
    if (absX > xStart && absX < xEnd && absY > yStart && absY < yEnd) {
      console.log("IT'S HIM!");
      setCurrentLevel((level) => level + 1);
    }
    console.log(e.clientX, e.clientY);
  };

  useEffect(() => {
    document.addEventListener('click', checkForCage);

    return () => {
      document.removeEventListener('click', checkForCage);
    };
  }, [currentLevel]);

  return (
    <div style={levelStyle.containerStyle}>
      <img
        id="image"
        src={`./assets/${img}`}
        alt=""
        style={levelStyle.imageStyle}
      />
      <div style={levelStyle.textStyle}>{`Level ${currentLevel + 1} of 8`}</div>
    </div>
  );
};

export default Level;
