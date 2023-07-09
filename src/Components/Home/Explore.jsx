import { useAppContext } from '../../context/AppContext';

import { Post } from './Post/Post';

const Explore = () => {
  const { allPosts } = useAppContext();

  return (
    <div className="feed">
      <h3 className="explore-header">Explore</h3>

      {allPosts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Explore;
