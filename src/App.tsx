import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Countdown from './assets/components/Countdown';
import RedirectToYouTube from './assets/components/RedirectToYouTube';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Countdown />} />
        <Route path="/youtube" element={<RedirectToYouTube />} />
      </Routes>
    </Router>
  );
};

export default App;