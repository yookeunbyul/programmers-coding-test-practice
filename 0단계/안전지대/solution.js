function solution(board) {
  //안전한 지역의 칸 수를 return
  //1.지뢰가 있는 칸을 찾고
  //2.지뢰 주변 8칸에 지뢰를 뿌린 후
  //3.지뢰가 없는 칸 수를 반환한다.

  //대각선 세팅
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

  //board는 정사각형, n*n 배열
  const n = board.length;

  //초기에는 모두 안전지대로 설정(다 0칸)
  let answer = n * n;

  //지뢰가 있는 칸을 담을 배열
  const stack = [];

  //1.지뢰가 있는 칸 찾기(이중 for문으로)
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      //지뢰가 있으면
      if (board[i][j] === 1) {
        //지뢰의 위치를 push
        stack.push([i, j]);

        //안전지대 수 감소
        answer--;
      }
    }
  }

  //만약 예제 3번처럼 지뢰로 꽉 차있으면 0 리턴
  if (answer === 0) return 0;

  //2.지뢰 주변 8칸에 지뢰 뿌리기
  stack.forEach(([x, y]) => {
    //8칸
    for (i = 0; i < 8; i++) {
      //board[nx][ny]가 현재 지뢰가 있는 곳([x,y])의 좌우상하대각선 좌표
      const nx = x + dx[i];
      const ny = y + dy[i];

      //지뢰 주변이 board 안에 있고
      //안전한 지역이라면(겹치는 부분이 있으니깐 answer가 배로 깎일 수 있는 걸 방지)
      if (nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] === 0) {
        //지뢰 뿌리기
        board[nx][ny] = 1;
        //안전지대 감소
        answer--;
      }
    }
  });

  return answer;
}
