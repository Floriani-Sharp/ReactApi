import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

const App = () => {
  return (
    <BrowserRouter>
      <Routes onUpdate={() => window.scrollTo(0, 0)}>
        <Route index element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
