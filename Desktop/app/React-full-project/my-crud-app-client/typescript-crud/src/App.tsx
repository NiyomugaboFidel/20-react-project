import React from 'react';
import UserDashboard from './features/UserDashboard';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Routes>
        <Route path='/' element={<UserDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
