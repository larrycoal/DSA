var majorityElement = function (nums) {
  let convertNums = {};
  let majority = { curr: 0, value: 0 };
  nums.forEach((num) => {
    if (convertNums[num]) {
      convertNums[num] = convertNums[num] + 1;
    } else {
      convertNums[num] = 1;
    }
  });
  for (let key in convertNums) {
    if (convertNums[key] > majority.value) {
      majority = { curr: key, value: convertNums[key] };
    }
  }
  return majority.curr;
};

var majorityElementTwo = function (nums) {
  nums.reduce((acc, curr, i, nums) => {
    if (acc[curr]) {
      acc[curr] = acc[curr] + 1;
    } else {
      acc[curr] = 1;
      console.log(acc, curr);
    }
    if (acc[curr] > majority.value) {
      majority = { curr, value: acc[curr] };
    }
    return acc;
  }, {});
  return majority.curr;
};
