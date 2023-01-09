function solution(array) {
  //최댓값 찾기
  //spread 연산자로 배열의 원소들을 꺼내 펼쳐준다
  var max = Math.max(...array);
  //Array.indexOf() : 해당 값의 인덱스를 반환한다
  var index = array.indexOf(max);
  return [max, index];
}
