import { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import useUser from '../../hooks/useUser';

import { Post } from './Post/Post';

const BookMarks = () => {
  const { bookmarks } = useAuthContext();
  const { getBookMarks } = useUser();

  useEffect(() => {
    getBookMarks();
  }, []);

  console.log(bookmarks);

  return (
    <div className="feed">
      {bookmarks.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
};

export default BookMarks;
