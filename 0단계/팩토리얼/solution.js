function solution(n) {
  var answer = 1;
  for (i = 1; i <= n; i++) {
    answer *= i;

    //아 이러면 1일때 이미 작으니깐 바로 return 시키는구나
    // if(answer < n){
    // return i;
    // }

    if (answer === n) {
      return i;
    }

    if (answer > n) {
      return i - 1;
    }
  }
}
