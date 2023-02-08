function solution(chicken) {
  //치킨 1마리가 곧 쿠폰 1장
  let coupon = chicken;
  //서비스 치킨의 수
  let service = 0;

  //남은 쿠폰이 10장 이상일 때까지 계속 돌려
  while (coupon >= 10) {
    //들고있는 쿠폰으로 먹을 수 있는 서비스 치킨의 수
    service += Math.floor(coupon / 10);
    //쿠폰의 수 = 시켜먹고 남은 쿠폰 + 서비스로 시켜먹고 받은 쿠폰
    coupon = (coupon % 10) + Math.floor(coupon / 10);
  }

  return service;
}
