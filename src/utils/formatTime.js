const formatTime = (time) => {
  const seconds = String(Math.floor(time % 60)).padStart(2, 0);
  const minutes = String(Math.floor(time / 60)).padStart(2, 0);
  return [seconds, minutes];
};

export default formatTime;
