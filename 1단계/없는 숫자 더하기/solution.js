function solution(numbers) {
  //찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수
  //     let answer = 0;
  //     const sorted = numbers.sort((a,b) => a - b);

  //     for(i=0; i<=9; i++){
  //         if(sorted.includes(i) === false){
  //             answer += i;
  //         }
  //     }

  //     return answer;

  //전체합에서 기존 배열합을 빼주면 없는 값의 합을 구할 수 있다니..
  return 45 - numbers.reduce((a, b) => a + b, 0);
}
