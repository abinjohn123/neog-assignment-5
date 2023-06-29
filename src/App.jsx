import { Routes, Route } from 'react-router-dom';
import Mockman from 'mockman-js';

import Home from './Components/Home';
import Header from './Components/Shared/Header';
import RequiresAuth from './Components/Auth/RequiresAuth';
import Authenticate from './Components/Auth';

function App() {
  return (
    <>
      <Header />
      <div className="layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Authenticate />} />
          <Route path="/mockman" element={<Mockman colorScheme="dark" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
