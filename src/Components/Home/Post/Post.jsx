import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router';

import { HeartIcon, BookmarkIcon } from '../../../icons/svg';
import { getFullName } from '../../../utils';

import { PostActions } from './PostActions';
import { useAuthContext } from '../../../context/AuthContext';
import usePosts from '../../../hooks/usePosts';
import useUser from '../../../hooks/useUser';
import { useAppContext } from '../../../context/AppContext';

const dateFormat = (dateObj) => {
  return new Intl.DateTimeFormat('en-Us', {
    hour: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateObj));
};

export const Post = ({ post }) => {
  const isBookmarksRoute = useLocation().pathname.includes('bookmark');
  const {
    _id,
    content,
    createdAt,
    likes: { likeCount = 0, likedBy = [] } = {},
  } = post;
  const navigate = useNavigate();
  const likeRef = useRef(null);
  const bookMarkRef = useRef(null);
  const { allUsers } = useAppContext();
  const { isLoggedIn, loggedInUser, bookmarks } = useAuthContext();
  const { addToBookMarks, removeFromBookMarks } = useUser();
  const { likePost, unlikePost } = usePosts();

  const postAuthor =
    allUsers.find((user) => user.username === post.username) ?? {};
  const { firstName, lastName, username, avatar } = postAuthor;

  const isPostLiked = likedBy.some(
    (user) => user.username === loggedInUser.username
  );
  const isPostBookmarked = bookmarks.some((post) => post._id === _id);

  const handlePostLike = () => {
    if (!isLoggedIn) return navigate('/login');
    likeRef.current.classList[isPostLiked ? 'remove' : 'add']('highlight');

    if (isPostLiked) unlikePost(_id);
    else likePost(_id);
  };

  const handlePostBookmark = () => {
    if (!isLoggedIn) return navigate('/login');

    bookMarkRef.current.classList[isPostBookmarked ? 'remove' : 'add'](
      'highlight'
    );

    if (isPostBookmarked) removeFromBookMarks(_id);
    else addToBookMarks(_id);
  };

  useEffect(() => {
    bookMarkRef.current.classList[
      isLoggedIn && isPostBookmarked ? 'add' : 'remove'
    ]('highlight');

    if (isBookmarksRoute) return;
    likeRef.current.classList[isLoggedIn && isPostLiked ? 'add' : 'remove'](
      'highlight'
    );
  }, [isLoggedIn]);

  return (
    <div className="post-card">
      <div className="header-container">
        <div className="post-header">
          <div className="avatar">
            <img src={avatar ?? '/avatars/1.png'} alt={username} />
          </div>
          <div className="post-details">
            <div className="author-details">
              <p className="name">{getFullName(firstName, lastName)}</p>
              <span className="username">@{username}</span>
            </div>
            <p className="creation">{dateFormat(createdAt)}</p>
          </div>
          {loggedInUser.username === username && <PostActions postId={_id} />}
        </div>
      </div>
      <div className="post-content">
        <p>{content}</p>
      </div>
      <div className="post-interactions">
        {!isBookmarksRoute && (
          <div className="interaction" onClick={handlePostLike} ref={likeRef}>
            <HeartIcon />
            <p>{likeCount ? likeCount : ''}</p>
          </div>
        )}
        <div
          className="interaction"
          ref={bookMarkRef}
          onClick={handlePostBookmark}
        >
          <BookmarkIcon />
        </div>
      </div>
    </div>
  );
};
