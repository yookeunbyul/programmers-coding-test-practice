function solution(price, money, count) {
  let all = 0;

  for (i = 1; i <= count; i++) {
    all += price * i;
  }

  //금액이 부족하지 않으면 0을 return 하세요.
  return money > all ? 0 : all - money;
}
