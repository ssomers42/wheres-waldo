import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div id="home-container">
      <div className="home-title">
        <h1 className="blue home-text">WHERE'S</h1>
        <h1 className="red home-text">NIC?</h1>
      </div>
      <img src="./assets/cage-head.png" id="ball"></img>
      <h1 id="home-btn" className="blue home-text">
        <Link to="game">PLAY</Link>
      </h1>
    </div>
  );
};

export default App;
