function solution(denum1, num1, denum2, num2) {
  //분모 더한값
  var num = num1 * num2;
  //분자 더한값
  var denum = denum1 * num2 + denum2 * num1;
  //최대공약수
  let maxnum = 1;

  //Math.min : 주어진 값 중 가장 작은 값 반환
  for (i = 2; i <= Math.min(num, denum); i++) {
    //두 자연수를 나눴을 때 나머지가 0이 되는 값 중 가장 큰 걸 찾으면 됨
    if (num % i === 0 && denum % i === 0) {
      maxnum = i;
    }
  }
  var answer = [denum / maxnum, num / maxnum];
  return answer;
}
