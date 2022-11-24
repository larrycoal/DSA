const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      let temp = arr[j];
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

const insertionSort = (arr) => {
  let temp;
  for (let i = 1; i < arr.length; i++) {
    temp = arr[i];
    for (var j = i - 1; arr[j] > temp && j > -1; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
};

const mergeFunc = (arr1, arr2) => {
  let combined = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      combined.push(arr1[i]);
      i++;
    } else {
      combined.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    combined.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    combined.push(arr2[j]);
    j++;
  }
  return combined;
};

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return mergeFunc(mergeSort(left), mergeSort(right));
};
