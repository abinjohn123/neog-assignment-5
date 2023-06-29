import { Routes, Route } from 'react-router-dom';
import Mockman from 'mockman-js';

import Home from './Components/Home';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman colorScheme="dark" />} />
      </Routes>
    </>
  );
}

export default App;
