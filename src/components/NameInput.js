import { useNavigate } from 'react-router-dom';
import postLeaderboard from '../utils/postLeaderboard';

const NameInput = ({ time, setName }) => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    if (e.target.value) {
      setName(e.target.value);
    } else setName('You');
  };
  return (
    <form
      onSubmit={(e) => {
        postLeaderboard(e, time);
        navigate('/');
      }}
    >
      <input
        onChange={handleChange}
        id="name"
        type="text"
        name="name"
        placeholder="Anonymous Cage"
      />
      <button id="submit-btn" type="submit">
        SUBMIT
      </button>
    </form>
  );
};

export default NameInput;
