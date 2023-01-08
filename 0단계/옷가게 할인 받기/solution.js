function solution(price) {
  var rate = 0;

  if (price < 100000) {
    rate = 0;
  }
  if (price >= 100000 && price < 300000) {
    rate = 0.05;
  }
  if (price >= 300000 && price < 500000) {
    rate = 0.1;
  }
  if (price >= 500000) {
    rate = 0.2;
  }

  var answer = price - price * rate;
  //소수점 이하를 버린 정수를 return
  return parseInt(answer);
}
