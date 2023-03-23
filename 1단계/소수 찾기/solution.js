function solution(n) {
  //효율성때문에 에라토스테네스의 체 알고리즘 사용
  const result = [];
  //0,1은 소수가 아니므로 false로 설정하고 n까지 임시 true로 설정
  const prime = [false, false, ...Array(n - 1).fill(true)];

  for (let i = 0; i * i <= n; i++) {
    if (prime[i]) {
      for (let j = i * 2; j <= n; j += i) {
        prime[j] = false;
      }
    }
  }

  //true만 걸러내고싶으면 filter(Boolean)
  return prime.filter(Boolean).length;
}
