import formatTime from '../utils/formatTime';

const LeaderboardEntry = ({ score, name, newScore }) => {
  const [seconds, minutes] = formatTime(score.time);

  let displayName;
  let classList = 'leaderboard-entry';
  if (newScore) {
    displayName = name;
    classList += ' new';
  } else displayName = score.name;

  return (
    <li>
      <div className={classList}>
        <span className="leaderboard-name">{displayName}</span>
        <span className="leaderboard-time">{`${minutes}:${seconds}`}</span>
      </div>
    </li>
  );
};

export default LeaderboardEntry;
