function solution(s) {
  //x와 x가 아닌 다른 글자들이 나온 횟수
  //처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리
  let answer = 0;

  let fixed = "";
  let xcount = 0;
  let notXcount = 0;

  for (const string of s) {
    //fixed가 공백이면 그때 문자를 넣어준다.
    if (fixed === "") fixed = string;

    if (fixed === string) {
      xcount++;
    } else {
      notXcount++;
    }

    if (xcount === notXcount) {
      answer++;
      xcount = 0;
      notXcount = 0;
      fixed = "";
    }
  }

  //for문을 다 돌고 fixed에 문자가 남아있으면 한번 더 분리
  if (fixed) {
    answer++;
  }

  return answer;
}
