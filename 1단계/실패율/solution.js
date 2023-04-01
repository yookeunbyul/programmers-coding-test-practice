function solution(N, stages) {
  //실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
  //실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return

  //단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
  //만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
  //스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.

  const stack = [];

  //스테이지에 도달한 플레이어 수(단계랑 같거나 크면 도달)
  let stage = 0;
  //스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수(단계랑 같으면 not clear)
  let notclear = 0;

  for (let i = 1; i <= N; i++) {
    stages.forEach((value) => {
      if (value >= i) {
        stage++;
      }

      if (value === i) {
        notclear++;
      }
    });

    stack.push([i, notclear / stage]);

    stage = 0;
    notclear = 0;
  }

  return stack.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
}
