var removeDuplicates = function (nums) {
  let k = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      let temp = nums.splice(i, 2);
      while (nums[i] === temp[0]) {
        nums.splice(i, 1);
      }
      nums.splice(i, 0, ...temp);
    }
  }
};
