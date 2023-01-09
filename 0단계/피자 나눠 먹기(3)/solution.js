function solution(slice, n) {
  var answer = n % slice === 0 ? n / slice : n / slice + 1;
  return Math.floor(answer);
}
