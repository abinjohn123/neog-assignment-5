import { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import useUser from '../../hooks/useUser';
import { Post } from './Post/Post';
import VoidSVG from '../Shared/Void';

const BookMarks = () => {
  const { bookmarks } = useAuthContext();
  const { getBookMarks } = useUser();

  useEffect(() => {
    getBookMarks();
  }, []);

  return (
    <div className="feed">
      {bookmarks.length === 0 && (
        <VoidSVG content="No bookmarks found. Add one today!" />
      )}
      {bookmarks.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
};

export default BookMarks;
