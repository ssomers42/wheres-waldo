import LeaderboardEntry from './LeaderboardEntry';

const Leaderboard = ({ leaderboard, time, name }) => {
  const sortFunction = (a, b) => {
    if (a.time > b.time) return 1;
    else return -1;
  };

  const newLeaderboard = [...leaderboard];
  newLeaderboard.push({ time });
  newLeaderboard.sort(sortFunction);

  const leaderboardList = newLeaderboard.map((score, i) => {
    if (score.time === time && !score.name) {
      return (
        <LeaderboardEntry
          key={`${score.time}`}
          score={score}
          name={name}
          position={i}
          newScore
        />
      );
    } else if (i < 5) {
      return (
        <LeaderboardEntry
          className="leaderboard-entry"
          key={`${score.time}`}
          score={score}
          position={i}
        />
      );
    }
  });

  // if (leaderboardList.length > 5) leaderboardList.pop();

  return (
    <div>
      <h4>Cage's Speed Demons</h4>
      <ol>{leaderboardList}</ol>
    </div>
  );
};

export default Leaderboard;
