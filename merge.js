var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < m + n; i++) {
    if (nums1[i] > nums2[0]) {
      nums1.pop();
      nums1.splice(i, 0, nums2.shift());
    }
  }
  if (nums2.length) {
    nums1.splice(-nums2.length, nums2.length, ...nums2);
  }
};
