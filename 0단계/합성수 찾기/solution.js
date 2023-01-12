//소수란 ? 1과 자기 자신 외의 약수를 가지지 않는 1보다 큰 자연수
//1은 소수가 아니다.
//2 : 1,2
//3 : 1,3 ... 이런 소수들을 걸러내면 합성수만 남는다.

//어떤 수 N의 제곱근보다 작은 수가 약수가 없다면 큰 값도 약수가 없다.
//어떤 수 N을 2, 3, ..., √N 사이 값으로 나눴을 때 딱 나누어 떨어지는 경우가 없으면 N은 소수이다.

const isPrime = (x) => {
  for (i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }

  return true;
};

const solution = (n) => {
  var number = [];
  //1은 소수도 합성수도 아니므로 제외
  for (j = 2; j <= n; j++) {
    number.push(j);
  }
  //소수 아닌 값 = 합성수만 리턴
  return number.filter((num) => !isPrime(num)).length;
};
