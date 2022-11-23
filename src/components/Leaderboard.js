import LeaderboardEntry from './LeaderboardEntry';

const Leaderboard = ({ leaderboard, time }) => {
  //TODO: Insert time into leaderboard display
  const leaderboardList = leaderboard.map((score) => (
    <LeaderboardEntry key={`${score.time},${score.name}`} score={score} />
  ));
  return (
    <div>
      <h4>Cage's Speed Demons</h4>
      <ol>{leaderboardList}</ol>
    </div>
  );
};

export default Leaderboard;
