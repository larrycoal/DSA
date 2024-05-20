var removeDuplicates = function (nums) {
  let k = nums.length;
  let i = 0;
  let c = i;
  while (i < k) {
    if (nums[c] === nums[c + 1]) {
      nums.splice(c, 1);
    } else {
      c++;
    }
    i++;
  }
};
