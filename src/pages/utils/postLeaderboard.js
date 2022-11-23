import { db } from '../../firebase/config';
import { addDoc, collection } from 'firebase/firestore';

const postLeaderboard = (e, time) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const leaderboardCol = collection(db, 'leaderboard');

  addDoc(leaderboardCol, { name, time });
};

export default postLeaderboard;
