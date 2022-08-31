import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes onUpdate={() => window.scrollTo(0, 0)}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
      {/* <MenuTabs /> */}
    </>
  );
};

export default App;
