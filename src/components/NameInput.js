import postLeaderboard from '../pages/utils/postLeaderboard';

const NameInput = ({ time }) => {
  return (
    <form onSubmit={(e) => postLeaderboard(e, time)}>
      <input id="name" type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NameInput;
