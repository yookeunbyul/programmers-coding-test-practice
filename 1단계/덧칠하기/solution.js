function solution(n, m, section) {
  //칠한 마지막 구역이 section 배열의 마지막 구역과 같거나 커지면 다 칠한거 잖아.

  let answer = 0;
  let painted = 0;

  for (const s of section) {
    if (painted < s) {
      answer++;
      //정한 섹션부터 칠하기 시작
      painted = s + m - 1;
    }
  }

  return answer;
}
