function solution(numbers, k) {
  //k가 1씩 증가할 때 index는 2씩 증가한다.
  let index = 0;

  //index는 0부터 시작하기 때문에 k-1까지 돌린다.
  for (i = 0; i < k - 1; i++) {
    index += 2;

    //index가 배열의 길이를 초과하면 배열의 길이를 빼준다.
    if (index > numbers.length) {
      index -= numbers.length;
    }
  }

  return numbers[index];
  //return numbers[((2 * (k -1))) % numbers.length];
}
