function solution(my_string) {
  //숫자가 아닌 값은 ''로 대체
  var answer = my_string.replace(/[^0-9]/g, "");
  //문자열 배열을 숫자 배열로 바꾼 뒤 오름차순으로 정렬
  return [...answer].map(Number).sort((a, b) => a - b);
}
