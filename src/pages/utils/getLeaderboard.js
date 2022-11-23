// Import the functions you need from the SDKs you need
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../firebase/config';

const getLeaderboard = async () => {
  const leaderboardCol = collection(db, 'leaderboard');
  const q = query(leaderboardCol, orderBy('time'), limit(5));
  const leaderboardSnap = await getDocs(q);
  const leaderboardList = leaderboardSnap.docs.map((doc) => doc.data());

  return leaderboardList;
};

export default getLeaderboard;
