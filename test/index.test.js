import { sorts } from '../src/Logic/sorts/_index';

const {
  BUBBLE_SORT: bubbleSort,
  HEAP_SORT: heapSort,
  INSERTION_SORT: insertionSort,
  MERGE_SORT: mergeSort,
  QUICK_SORT: quickSort,
} = sorts;

/**
 *
 * @param {Array[][]} inputArray an array of arrays
 * @returns {Number[]}
 */
const grabFinishedSort = (inputArray) => {
  const lastIndex = inputArray.length - 1;

  return inputArray[lastIndex];
};

/**
 * @description takes a sort,sorts, and returns final array
 * @param {*} sortCallback
 * @param {*} unsortedArray
 */
const processSort = (sortCallback, unsortedArray) => {
  const phases = sortCallback(unsortedArray);
  const output = grabFinishedSort(phases);
  return output;
};

const generateTest = (sortCallback, unsortedArray) => {
  test(`[${unsortedArray.toString()}]`, () => {
    const data = unsortedArray;
    const processedData = processSort(sortCallback, data);
    const sortedData = data.sort((a, b) => a - b);
    // expect(processedData.toString()).toEqual(sortedData.toString());
    expect(sortedData.toString()).toEqual(processedData.toString());
  });
};

function resetTestValues() {
  t1 = [1, 2, 5, 3, 3];
  t2 = [8, 2, 10, 3, 3];
  t3 = [62, 38, 44, 95, 93, 13, 48, 8, 8, 37];
  t4 = [1000, 1, 111];
  t5 = [12, 67, 65, 92, 39, 11, 10, 76, 83, 25, 66, 39, 27, 27, 12];
  t6 = [...t5, ...t5];
  t7 = [...t4, ...t4, ...t3];
}

let t1 = [1, 2, 5, 3, 3];
let t2 = [8, 2, 10, 3, 3];
let t3 = [62, 38, 44, 95, 93, 13, 48, 8, 8, 37];
let t4 = [1000, 1, 111];
let t5 = [12, 67, 65, 92, 39, 11, 10, 76, 83, 25, 66, 39, 27, 27, 12];
let t6 = [...t5, ...t5];
let t7 = [...t4, ...t4, ...t3];

describe('bconstleSort should sort', () => {
  resetTestValues();
  generateTest(bubbleSort, t1);
  generateTest(bubbleSort, t2);
  generateTest(bubbleSort, t3);
  generateTest(bubbleSort, t4);
  generateTest(bubbleSort, t5);
  generateTest(bubbleSort, t6);
  generateTest(bubbleSort, t7);
});

describe('heapSort should sort', () => {
  resetTestValues();
  generateTest(heapSort, t1);
  generateTest(heapSort, t2);
  generateTest(heapSort, t3);
  generateTest(heapSort, t4);
  generateTest(heapSort, t5);
});

describe('insertionSort should sort', () => {
  resetTestValues();
  generateTest(insertionSort, t1);
  generateTest(insertionSort, t2);
  generateTest(insertionSort, t3);
  generateTest(insertionSort, t4);
  generateTest(insertionSort, t5);
});

describe('mergeSort should sort', () => {
  resetTestValues();
  generateTest(mergeSort, t1);
  generateTest(mergeSort, t2);
  generateTest(mergeSort, t3);
  generateTest(mergeSort, t4);
  generateTest(mergeSort, t5);
});

describe('quickSort should sort', () => {
  resetTestValues();
  generateTest(quickSort, t1);
  generateTest(quickSort, t2);
  generateTest(quickSort, t3);
  generateTest(quickSort, t4);
  generateTest(quickSort, t5);
});
