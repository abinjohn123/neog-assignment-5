export const noop = () => {};

export const getFullName = (firstName = '', lastName = '') =>
  `${firstName[0].toUpperCase()}${firstName.slice(
    1
  )} ${lastName[0].toUpperCase()}${lastName.slice(1)}`;
