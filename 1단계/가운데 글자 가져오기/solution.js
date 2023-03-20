function solution(s) {
  const left = 0;
  const right = s.length - 1;
  const mid = Math.floor((left + right) / 2);

  if (s.length % 2 === 0) {
    return s[mid] + s[mid + 1];
  } else {
    return s[mid];
  }
}
