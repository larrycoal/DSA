/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let rem = "0";
  let arr1 = a.split("");
  let arr2 = b.split("");
  let result = [];
  let temp = arr1.length > arr2.length ? arr2.length : arr1.length;
  while (temp > 0) {
    let first = arr1.pop();
    let second = arr2.pop();
    if (
      (first === "0" && second === "1") ||
      (first === "1" && second === "0")
    ) {
      rem === "0" ? result.push("1") : result.push("0");
    } else if (first === "0" && second === "0") {
      rem === "0" ? result.push("0") : result.push("1");
      rem = "0";
    } else {
      if (rem === "0") {
        result.push("0");
        rem = "1";
      } else {
        result.push("1");
      }
    }
    temp--;
  }
  if (arr1.length) {
    arr1.reverse().forEach((bi) => {
      if (rem === "1" && bi === "1") {
        result.push("0");
      } else if (rem === "1" && bi === "0") {
        result.push("1");
        rem = "0";
      } else {
        result.push(bi);
      }
    });
  }
  if (arr2.length) {
    arr2.reverse().forEach((bi) => {
      if (rem === "1" && bi === "1") {
        result.push("0");
      } else if (rem === "1" && bi === "0") {
        result.push("1");
        rem = "0";
      } else {
        result.push(bi);
      }
    });
  }
  rem === "1" ? result.push("1") : null;
  return result.reverse().join("");
};
