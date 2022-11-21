import Timer from './Timer';
import NameInput from './NameInput';
import Leaderboard from './Leaderboard';

const style = {
  overlay: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
  },
  container: {
    padding: '40px',
    backgroundColor: 'white',
  },
};

const WinnerModal = ({ time, setTime }) => {
  return (
    <div style={style.overlay}>
      <div style={style.container}>
        <Timer time={time} setTime={setTime} />
        <p>
          Slap your name on that leaderboard. <br /> You've earned it.
        </p>
        <NameInput />
        <Leaderboard />
      </div>
    </div>
  );
};

export default WinnerModal;
