function solution(num, total) {
  //a는 첫번째 값
  //a + a + 1 + a + 2 = 12
  //3a + 3 = 12
  //a = total - 3 / num

  //a + a + 1 + a + 2 + a + 3 + a + 4 = 15
  //5a + 10 = 15
  //a = total - 10 / num

  //a + a + 1 + a + 2 + a + 3
  //4a + 6 = 14
  //a = total - 6 / num

  //a + a + 1 + a + 2 + a + 3 + a + 4
  //5a + 10 = 5
  //a = total - 10 / num

  //total에서 빼주는 값을 구한다.
  let sum = 0;
  for (i = 0; i < num; i++) {
    sum += i;
  }

  let first = (total - sum) / num;
  let answer = [];

  for (i = 0; i < num; i++) {
    answer.push(first + i);
  }

  return answer;
}
