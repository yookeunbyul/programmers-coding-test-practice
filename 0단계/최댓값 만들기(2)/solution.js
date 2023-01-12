function solution(numbers) {
  // var answer = [];
  // for(i=0; i < numbers.length; i++){
  //     for(j=0; j <= i; j++){
  //         //같은 인덱스 곱하기는 제외
  //         if(i !== j)
  //         answer.push(numbers[i] * numbers[j]);
  //     }
  // }
  // return Math.max(...answer);

  //5니깐 맨 뒤는 4번째 자리
  //-1 해줘야 맨 마지막 원소
  var l = numbers.length;
  //오름차순: 작은거부터
  numbers.sort((a, b) => a - b);
  //음수 곱이랑 맨 뒤 인덱스 곱이랑 비교
  return Math.max(numbers[0] * numbers[1], numbers[l - 1] * numbers[l - 2]);
}
