import Timer from './Timer';
import NameInput from './NameInput';
import Leaderboard from './Leaderboard';
import postLeaderboard from '../utils/postLeaderboard';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const WinnerModal = ({ time, leaderboard }) => {
  const [name, setName] = useState('You');
  const navigate = useNavigate();
  return (
    <div
      id="overlay"
      onClick={(e) => {
        postLeaderboard(e, time);
        navigate('/');
      }}
    >
      <div id="winner-modal" onClick={(e) => e.stopPropagation()}>
        <Timer time={time} />
        <p>
          Slap your name on that leaderboard. <br /> You've earned it.
        </p>
        <NameInput name={name} setName={setName} time={time} />
        <Leaderboard leaderboard={leaderboard} name={name} time={time} />
      </div>
    </div>
  );
};

export default WinnerModal;
