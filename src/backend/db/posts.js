import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      '"Got a new keyboard case today, and it feels like a total game-changer! The sturdy aluminum body adds a touch of elegance and gives my typing experience a solid foundation. 💪💼',
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'adarshbalika',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      'Finally completed my dream keyboard build! The combination of silent switches and artisan keycaps makes typing feel like floating on clouds. 😌✨ #keyboardenthusiast #dreamsetup',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'shubhamsoni',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      'Just discovered a hidden keyboard customization shop in my city. Spent hours exploring their collection of unique keysets and got lost in a world of colors and textures! 🌈🔥 ',
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'thatsaadanam',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
