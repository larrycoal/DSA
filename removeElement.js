var removeElement = function (nums, val) {
  if (nums.indexOf(val) !== -1) {
    nums.splice(nums.indexOf(val), 1);
    return removeElement(nums, val);
  }
};
