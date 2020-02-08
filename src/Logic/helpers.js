import { _ } from 'Utils';

export const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateRandomArray = (size, min, max) => {
  const array = [];

  _.times(size, () => {
    array.push(randomIntFromInterval(min, max));
  });

  return array;
};

export const isSorted = array => {
  const sortedArray = _.sortBy([...array]);
  const isPossiblySorted = _.isEqual(array, sortedArray);
  return isPossiblySorted;
};

export const normalizeString = name => {
  // converts SCREAMING_SNAKE to 'Screaming Snake'
  let str = name
    .toLowerCase()
    .split('_')
    .join(' ');

  str = str.replace(/\b\w/g, v => v.toUpperCase());
  return str;
};

export const swap = (indexA, indexB, array) => {
  if (typeof indexA !== 'number' || typeof indexB !== 'number') {
    throw new Error('argument indexA or indexB is not a number');
  }

  if (!Array.isArray(array)) {
    throw new Error('argument array is not an array');
  }

  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
};

export const convertValuesToNumbers = values => {
  return _.map(values, value => Number(value));
};
