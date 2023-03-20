function solution(arr, divisor) {
  //divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열
  //나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환

  //나누어 떨어지는 원소만 filter로 남긴다.
  const answer = arr.filter((a) => a % divisor === 0);

  if (answer.length === 0) {
    return [-1];
  } else {
    return answer.sort((a, b) => a - b);
  }
}
