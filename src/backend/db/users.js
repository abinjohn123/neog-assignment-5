import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: 'Gaayamma',
    lastName: '',
    username: 'gaayamani',
    password: 'gaayamma123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: '/avatars/1.png',
  },
  {
    _id: uuid(),
    firstName: 'Jeenu',
    lastName: 'San',
    username: 'thatsaadanam',
    password: 'saadanam123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: '/avatars/3.png',
  },
  {
    _id: uuid(),
    firstName: 'Shubham',
    lastName: 'Soni',
    username: 'shubhamsoni',
    password: 'shubhamsoni123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: '/avatars/4.png',
  },
  {
    _id: uuid(),
    firstName: 'Steve',
    lastName: 'Johny',
    username: 'sjohnyk',
    password: 'thisismypassword',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: '/avatars/2.png',
  },
  {
    _id: uuid(),
    firstName: 'Abin',
    lastName: 'John',
    username: 'abin.john',
    password: 'thenameisjohn',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: '/avatars/6.png',
  },
  {
    _id: uuid(),
    firstName: 'Joyes',
    lastName: 'PJ',
    username: 'joyespuli',
    password: 'pulikuttan',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: '/avatars/7.png',
  },
];
