import React from 'react';
import Header from './components/Header';
import WhatIsTaleOS from './pages/WhatIsTaleOS';
import Roadmap from './pages/Roadmap';
import Partnerships from './pages/Partnerships';

function App() {
  return (
    <div>
      <Header />
      <WhatIsTaleOS />
      <Roadmap />
      <Partnerships />
    </div>
  );
}

export default App;