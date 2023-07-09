import { Routes, Route } from 'react-router-dom';
import Mockman from 'mockman-js';

import Home from './Components/Home';
import Header from './Components/Shared/Header';
import Profile from './Components/Profile';
import BookMarks from './Components/Home/Bookmarks';
import Explore from './Components/Home/Explore';
import RequiresAuth from './Components/Auth/RequiresAuth';
import Authenticate from './Components/Auth';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authenticate />} />
        <Route path="/user/:userId/" element={<Profile />} />
        <Route
          path="/bookmarks"
          element={
            <RequiresAuth>
              <BookMarks />
            </RequiresAuth>
          }
        />
        <Route path="/explore" element={<Explore />} />
        <Route path="/mockman" element={<Mockman colorScheme="dark" />} />
      </Routes>
    </>
  );
}

export default App;
