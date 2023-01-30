function solution(i, j, k) {
  var arr = [];
  for (n = i; n <= j; n++) {
    arr.push(n);
  }

  //숫자를 문자열로 다 붙인 후
  //하나씩 떨어트려서 필터로 k와 같은 값만 걸러낸다.
  return arr
    .join("")
    .split("")
    .map(Number)
    .filter((n) => n === k).length;
}
