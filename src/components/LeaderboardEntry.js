import formatTime from '../pages/utils/formatTime';

const LeaderboardEntry = ({ score }) => {
  const [seconds, minutes] = formatTime(score.time);

  return (
    <li>
      <span className="leaderboard-name">{score.name}</span>
      <span className="leaderboard-time">{`${minutes}:${seconds}`}</span>
    </li>
  );
};

export default LeaderboardEntry;
