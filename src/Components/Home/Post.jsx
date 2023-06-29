import { HeartIcon, BookmarkIcon } from '../../icons/svg';

const getName = (firstName = '', lastName = '') =>
  `${firstName[0].toUpperCase()}${firstName.slice(
    1
  )} ${lastName[0].toUpperCase()}${lastName.slice(1)}`;

const dateFormat = (dateObj) => {
  return new Intl.DateTimeFormat('en-Us', {
    hour: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateObj));
};

export const Post = ({ post, author }) => {
  const {
    content,
    createdAt,
    likes: { likeCount, likedBy, dislikedBy },
  } = post;
  const { firstName, lastName, username, avatar } = author;

  return (
    <div className="post-card">
      <div className="header-container">
        <div className="post-header">
          <div className="avatar">
            <img src={avatar ?? '/avatars/1.png'} alt={username} />
          </div>
          <div className="post-details">
            <div className="author-details">
              <p className="name">{getName(firstName, lastName)}</p>
              <span className="username">@{username}</span>
            </div>
            <p className="creation">{dateFormat(createdAt)}</p>
          </div>
        </div>
      </div>
      <div className="post-content">
        <p>{content}</p>
      </div>
      <div className="post-actions">
        <div className="action">
          <HeartIcon />
          <p>{likeCount ? likeCount : ''}</p>
        </div>
        <div className="action">
          <BookmarkIcon />
        </div>
      </div>
    </div>
  );
};
