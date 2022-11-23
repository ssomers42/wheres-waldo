import LeaderboardEntry from './LeaderboardEntry';

const Leaderboard = ({ leaderboard, time, name }) => {
  //TODO: Insert time into leaderboard display

  const sortFunction = (a, b) => {
    if (a.time > b.time) return 1;
    else return -1;
  };

  const newLeaderboard = [...leaderboard];
  newLeaderboard.push({ time });
  newLeaderboard.sort(sortFunction);

  const leaderboardList = newLeaderboard.map((score) => {
    if (score.time === time && !score.name) {
      return (
        <LeaderboardEntry
          key={`${score.time}`}
          score={score}
          name={name}
          newScore
        />
      );
    } else
      return (
        <LeaderboardEntry
          className="leaderboard-entry"
          key={`${score.time}`}
          score={score}
        />
      );
  });

  if (leaderboardList.length > 5) leaderboardList.pop();

  return (
    <div>
      <h4>Cage's Speed Demons</h4>
      <ol>{leaderboardList}</ol>
    </div>
  );
};

export default Leaderboard;
