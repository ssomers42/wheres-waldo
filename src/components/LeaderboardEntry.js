import formatTime from '../utils/formatTime';

const LeaderboardEntry = ({ score, name, newScore, position }) => {
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
        <div className="leaderboard-left">
          <span className="leaderboard-position">{`${position + 1}.`}</span>
          <span className="leaderboard-name">{displayName}</span>
        </div>
        <span className="leaderboard-time">{`${minutes}:${seconds}`}</span>
      </div>
    </li>
  );
};

export default LeaderboardEntry;
