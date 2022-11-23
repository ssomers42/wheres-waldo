import levels from '../levels';
import Timer from '../components/Timer';
import LevelDisplay from '../components/LevelDisplay';
import WinnerModal from '../components/WinnerModal';
import { useState, useEffect } from 'react';
import getLeaderboard from '../utils/getLeaderboard';

const Game = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [time, setTime] = useState(0);
  const [leaderboard, setLeaderboard] = useState();

  if (!leaderboard) {
    (async () => {
      console.log('Fetching leaderboard');
      setLeaderboard(await getLeaderboard());
    })();
  }

  let { levelName, img, relXStart, relXEnd, relYStart, relYEnd } =
    levels[currentLevel];

  const levelStyle = {
    imageStyle: {
      backgroundColor: 'black',
      maxWidth: '100vw',
      maxHeight: '100vh',
    },
    containerStyle: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
  };

  const handleClick = (e) => {
    //get coords for the image on screen
    let image = document.querySelector('#image');
    let rect = image.getBoundingClientRect();

    //get width, height of image
    let imageWidth = rect.width;
    let imageHeight = rect.height;

    //get absolute click location using the images distance from the browser's X0, Y0
    let absX = Math.floor(e.clientX - rect.left);
    let absY = Math.floor(e.clientY - rect.top);

    //use the image height, width to turn the absX, absY into relative coords for responsive viewports
    let relX = absX / imageWidth;
    let relY = absY / imageHeight;

    //use relative coords to check if the cursor is on the image
    if (
      relX > relXStart &&
      relX < relXEnd &&
      relY > relYStart &&
      relY < relYEnd
    ) {
      console.log("IT'S HIM!");
      if (currentLevel < levels.length - 1) {
        setCurrentLevel((level) => level + 1);
      } else {
        setPlaying(false);
      }
    }
  };

  //bind click event listener for each new level
  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
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
      <div id="info-display">
        {playing && <Timer playing={playing} time={time} setTime={setTime} />}
        {playing && <LevelDisplay currentLevel={currentLevel} />}
      </div>
      {!playing && (
        <WinnerModal time={time} setTime={setTime} leaderboard={leaderboard} />
      )}
    </div>
  );
};

export default Game;
