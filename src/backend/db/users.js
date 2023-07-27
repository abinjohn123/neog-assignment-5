import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: '12asdffsd3123asdfa23123',
    firstName: 'Gaayamma',
    lastName: '',
    username: 'gaayamani',
    password: 'gaayamma123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: '/avatars/1.png',
    followers: [
      {
        _id: '456745674567456745',
        firstName: 'Jeenu',
        lastName: 'San',
        username: 'thatsaadanam',
        password: 'saadanam123',
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar: '/avatars/3.png',
      },
      {
        _id: 'vasdldhkljf09834h14',
        firstName: 'Steve',
        lastName: 'Johny',
        username: 'sjohnyk',
        password: 'thisismypassword',
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar: '/avatars/2.png',
      },
      {
        _id: 'fkfjvndf98347473csdg',
        firstName: 'Abimon',
        lastName: 'Fernandez',
        username: 'abin.john',
        password: 'thenameisjohn',
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar: '/avatars/6.png',
      },
    ],
    following: [
      {
        _id: '456745674567456745',
        firstName: 'Jeenu',
        lastName: 'San',
        username: 'thatsaadanam',
        password: 'saadanam123',
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar: '/avatars/3.png',
      },
      {
        _id: 'fkfjvndf98347473csdg',
        firstName: 'Abimon',
        lastName: 'Fernandez',
        username: 'abin.john',
        password: 'thenameisjohn',
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar: '/avatars/6.png',
      },
      {
        _id: 'f934nr9fahnslfnisgsdg',
        firstName: 'Joyes',
        lastName: 'PJ',
        username: 'joyespuli',
        password: 'pulikuttan',
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar: '/avatars/7.png',
      },
    ],
  },
  {
    _id: '456745674567456745',
    firstName: 'Jeenu',
    lastName: 'San',
    username: 'thatsaadanam',
    password: 'saadanam123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: '/avatars/3.png',
    followers: [],
    following: [],
  },
  {
    _id: 'lasfnapsdfj3491348',
    firstName: 'Shubham',
    lastName: 'Soni',
    username: 'shubhamsoni',
    password: 'shubhamsoni123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: '/avatars/4.png',
    followers: [],
    following: [],
  },
  {
    _id: 'vasdldhkljf09834h14',
    firstName: 'Steve',
    lastName: 'Johny',
    username: 'sjohnyk',
    password: 'thisismypassword',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: '/avatars/2.png',
    followers: [
      {
        _id: '12asdffsd3123asdfa23123',
        firstName: 'Gaayamma',
        lastName: '',
        username: 'gaayamani',
        password: 'gaayamma123',
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar: '/avatars/1.png',
      },
      {
        _id: 'fkfjvndf98347473csdg',
        firstName: 'Abimon',
        lastName: 'Fernandez',
        username: 'abin.john',
        password: 'thenameisjohn',
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar: '/avatars/6.png',
      },
    ],
    following: [],
  },
  {
    _id: 'fkfjvndf98347473csdg',
    firstName: 'Abimon',
    lastName: 'Fernandez',
    username: 'abin.john',
    password: 'thenameisjohn',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: '/avatars/6.png',
    followers: [
      {
        _id: 'vasdldhkljf09834h14',
        firstName: 'Steve',
        lastName: 'Johny',
        username: 'sjohnyk',
        password: 'thisismypassword',
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar: '/avatars/2.png',
      },
    ],
    following: [
      {
        _id: '12asdffsd3123asdfa23123',
        firstName: 'Gaayamma',
        lastName: '',
        username: 'gaayamani',
        password: 'gaayamma123',
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar: '/avatars/1.png',
      },
      {
        _id: 'vasdldhkljf09834h14',
        firstName: 'Steve',
        lastName: 'Johny',
        username: 'sjohnyk',
        password: 'thisismypassword',
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar: '/avatars/2.png',
      },
    ],
  },
  {
    _id: 'f934nr9fahnslfnisgsdg',
    firstName: 'Joyes',
    lastName: 'PJ',
    username: 'joyespuli',
    password: 'pulikuttan',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: '/avatars/7.png',
    followers: [
      {
        _id: 'vasdldhkljf09834h14',
        firstName: 'Steve',
        lastName: 'Johny',
        username: 'sjohnyk',
        password: 'thisismypassword',
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar: '/avatars/2.png',
      },
    ],
    following: [],
  },
];
