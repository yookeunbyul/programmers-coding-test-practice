function solution(num) {
  //1이 될 때까지 다음 작업을 반복
  //=> 1이 되면 while loop에서 빠져나오면 되는 거 였어..

  let answer = 0;

  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }

    answer++;
  }

  if (answer > 500) {
    return -1;
  }

  return answer;
}
