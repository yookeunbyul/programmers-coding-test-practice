function solution(a, b) {
  //길이가 같은 두 1차원 정수 배열
  //     let answer = 0;

  //     for(i=0; i<a.length; i++){
  //         answer += a[i] * b[i];
  //     }

  //     return answer;

  return a.reduce((acc, _, i) => acc + a[i] * b[i], 0);
}
