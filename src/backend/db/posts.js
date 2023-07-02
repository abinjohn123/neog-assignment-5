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
    username: 'gaayamani',
    createdAt: '2023-06-29T08:28:42.815Z',
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
    createdAt: '2023-06-28T08:28:42.815Z',
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
  {
    _id: uuid(),
    content:
      "Spent the whole weekend soldering and programming my custom keyboard. It's a labor of love, but the end result is so worth it. 🛠️❤️",
    likes: {
      likeCount: 22,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'gaayamani',
    createdAt: '2023-06-25T08:28:42.815Z',
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Exploring different switch options for my next build. It's incredible how a small piece of metal can make such a difference in typing feel. 🔄⌨️",
    likes: {
      likeCount: 700,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'shubhamsoni',
    createdAt: '2023-04-29T08:28:42.815Z',
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Joined a keyboard enthusiasts' meetup and had a blast geeking out about keycap profiles, switch lubing, and soldering techniques. Finally found my tribe! 🤓🎉 ",
    likes: {
      likeCount: 125,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'thatsaadanam',
    createdAt: '2023-07-01T08:28:42.815Z',
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      'Just received my custom keycap set in the mail! My keyboard is about to get a serious style upgrade. 😎💻 #keyboardenthusiast ',
    likes: {
      likeCount: 95,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'sjohnyk',
    createdAt: '2023-07-01T08:28:42.815Z',
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      'Looking to upgrade my current keycaps to something premium and durable. Any suggestions for keycap sets that offer both style and longevity? 🎩💪 ',
    likes: {
      likeCount: 125,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'shubhamsoni',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
