var mySqrt = function (x) {
  let l = 0;
  let r = Math.ceil(x / 2);
  let mid = Math.ceil((l + r) / 2);
  if (x === 0 || x === 1) return x;
  while (true) {
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      let temp = mid - 1;
      if (temp * temp < x) {
        return temp;
      } else {
        r = mid;
        mid = Math.ceil((l + r) / 2);
      }
    } else if (mid * mid < x) {
      let temp = mid + 1;
      if (temp * temp > x) {
        return mid;
      } else {
        l = mid;
        mid = Math.ceil((l + r) / 2);
      }
    }
  }
};
