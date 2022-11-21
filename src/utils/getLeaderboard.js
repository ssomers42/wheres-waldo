// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDj0DGzca-YCKOG9b5ViaRjAp5mjUpMo7g',
  authDomain: 'wheres-nic.firebaseapp.com',
  projectId: 'wheres-nic',
  storageBucket: 'wheres-nic.appspot.com',
  messagingSenderId: '171063380937',
  appId: '1:171063380937:web:e89c076077ff15a134b618',
  measurementId: 'G-RQ4NCMDMKE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getLeaderboard = async () => {
  const leaderboardCol = collection(db, 'leaderboard');
  const leaderboardSnap = await getDocs(leaderboardCol);
  const leaderboardList = leaderboardSnap.docs.map((doc) => doc.data());
  return leaderboardList;
};

export default getLeaderboard;
