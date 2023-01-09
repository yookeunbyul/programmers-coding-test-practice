function solution(box, n) {
  //구조 분해
  let [width, length, height] = box;
  var answer =
    Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
  return answer;
}
