function solution(s) {
  //한 글자로 쪼갠 후 알파벳 순으로 정렬
  var arr = s.split("").sort();
  //Array.indexOf()는 앞에서부터 탐색
  //Array.lastIndexOf()는 뒤에서부터 탐색
  //고로 중복이 없다면 앞에서나 뒤에서나 인덱스값이 같을 것.
  //중복이 없는 것만 filter로 걸러낸다.
  var answer = arr.filter((n) => arr.indexOf(n) === arr.lastIndexOf(n));
  return answer.join("");
}
