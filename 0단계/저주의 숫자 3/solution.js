function solution(n) {
  //3의 배수는 사용 X, 숫자에 3이 포함되서도 안된다.
  let x3 = 0;

  for (i = 1; i <= n; i++) {
    x3++;

    //x3이 3의 배수가 아닐 때까지, 숫자에 3이 포함되지 않을 때까지
    while (x3 % 3 === 0 || x3.toString().includes("3")) {
      x3++;
    }

    // console.log(x3);
  }

  return x3;
}
