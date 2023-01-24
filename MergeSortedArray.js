/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} 
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length, ...nums2)
  nums1 = nums1.sort((a, b) => a - b);
};
