import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Level from './pages/Level';
import Home from './pages/Home';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Level />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
