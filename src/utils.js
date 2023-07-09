export const noop = () => {};

export const getFullName = (firstName = '', lastName = '') =>
  `${firstName.slice(0, 1).toUpperCase()}${firstName.slice(1)} ${lastName
    .slice(0, 1)
    .toUpperCase()}${lastName.slice(1)}`;

export const getFirstName = (firstName = '') =>
  `${firstName.slice(0, 1).toUpperCase()}${firstName.slice(1)}`;

export const setStateAfterDelay = (setter) => setTimeout(setter, 400);
