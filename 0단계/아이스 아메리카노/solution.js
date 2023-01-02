function solution(money) {
  // return [parseInt(money / 5500), money - parseInt(money / 5500) * 5500];
  return [parseInt(money / 5500), money % 5500];
}
