var rotate = function (nums, k) {
  if (k > nums.length) {
    k = k % nums.length;
  }
  nums.unshift(...nums.splice(nums.length - k));
};
