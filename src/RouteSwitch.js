import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Game from './pages/Game';
import App from './pages/App';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
