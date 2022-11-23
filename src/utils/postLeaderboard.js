import { db } from '../firebase/config';
import { addDoc, collection } from 'firebase/firestore';

const postLeaderboard = (e, time) => {
  e.preventDefault();

  const nameValue = document.getElementById('name').value;
  let name;
  !nameValue ? (name = 'Nicolas Cage') : (name = nameValue);

  const leaderboardCol = collection(db, 'leaderboard');
  addDoc(leaderboardCol, { name, time });
};

export default postLeaderboard;
