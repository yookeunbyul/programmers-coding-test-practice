function solution(absolutes, signs) {
  //t는 양수, f는 음수
  // let answer = 0;

  //signs의 길이는 absolutes의 길이와 같습니다.
  //     for(i=0; i<signs.length; i++){
  //         if(signs[i]){
  //             answer += absolutes[i];
  //         }else{
  //             answer -= absolutes[i];
  //         }
  //     }

  //     return answer;

  return absolutes.reduce((a, b, i) => a + b * (signs[i] ? 1 : -1), 0);
}
