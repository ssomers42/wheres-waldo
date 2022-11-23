import formatTime from '../pages/utils/formatTime';

const TimeDisplay = ({ time }) => {
  const [seconds, minutes] = formatTime(time);

  return `${minutes}: ${seconds}`;
};

export default TimeDisplay;
