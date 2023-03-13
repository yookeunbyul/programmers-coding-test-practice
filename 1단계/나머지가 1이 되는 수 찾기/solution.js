function solution(n) {
  //나눴을 때 나머지가 1이 되도록하는 가장 작은 자연수를 return

  for (let i = 1; i <= n; i++) {
    if (n % i === 1) {
      //조건이 맞으면 바로 리턴하기 때문에 가장 작은 자연수를 구할 수 있다.
      return i;
    }
  }
}
