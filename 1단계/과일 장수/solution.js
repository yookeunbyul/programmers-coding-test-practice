function solution(k, m, score) {
  //가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산

  //예를 들어, k = 3, m = 4, 사과 7개의 점수가 [1, 2, 3, 1, 2, 3, 1]이라면
  //다음과 같이 [2, 3, 2, 3]으로 구성된 사과 상자 1개를 만들어 판매하여 최대 이익을 얻을 수 있습니다.

  //(최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) = 2 x 4 x 1 = 8

  let answer = 0;
  const sorted = score.sort((a, b) => a - b);

  while (sorted.length >= m) {
    //뒤에서부터 m개씩 자르기
    let spliced = sorted.splice(sorted.length - m, m);
    //오름차순이기 때문에 0번째가 최솟값
    answer += spliced[0] * m;
  }

  return answer;
}
