function solution(array, height) {
  var taller = 0;
  array.forEach((i) => {
    if (i > height) {
      taller += 1;
    }
  });
  return taller;
}
