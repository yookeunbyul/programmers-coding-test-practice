function solution(s) {
  let arr = s.split(" ");
  let answer = 0;

  // 1 + 2 - 2 + 3 = 4
  // 10 + 20 + 30 + 40 = 100
  // 10 - 10 + 20 - 20 + 1 = 1
  // 10 - 10 + 20 - 20 = 0
  // -1 + -2 + -3 - (-3) = -3

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === "Z") {
      answer = answer - Number(arr[i - 1]);
    } else {
      answer = answer + Number(arr[i]);
    }
  }

  return answer;
}
