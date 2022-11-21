import getLeaderboard from '../utils/getLeaderboard';
import { useState, useEffect } from 'react';
import formatTime from '../utils/formatTime';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const getLeaderboardList = async () => {
      let leaderboardObj = await getLeaderboard();
      setLeaderboard(
        leaderboardObj.map((score) => {
          const [seconds, minutes] = formatTime(score.time);
          return (
            <li>
              <span>{score.name}</span>
              <span>{`${minutes}:${seconds}`}</span>
            </li>
          );
        })
      );
    };
    getLeaderboardList();
  }, []);

  //
  // console.log(leaderboardList);
  return <ol>{leaderboard}</ol>;
};

export default Leaderboard;
