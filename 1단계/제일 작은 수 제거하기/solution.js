function solution(arr) {
  //가장 작은 수를 제거한 배열을 리턴
  //리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴

  //내림차순이 아니라 그냥 최솟값을 제거하는 건가보네..
  const min = Math.min(...arr);
  //최솟값 제거
  const answer = arr.filter((num) => num !== min);

  if (answer.length === 0) {
    return [-1];
  } else {
    return answer;
  }
}
