const style = {
  position: 'absolute',
  top: 0,
  backgroundColor: 'white',
  padding: '16px 32px',
};

const LevelDisplay = ({ currentLevel }) => {
  return <div style={style}>{`Level ${currentLevel + 1} of 8`}</div>;
};

export default LevelDisplay;
