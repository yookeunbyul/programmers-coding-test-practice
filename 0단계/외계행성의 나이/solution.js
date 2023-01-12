function solution(age) {
  // var answer = "";
  // var arr = {
  //     0 : "a",
  //     1 : "b",
  //     2 : "c",
  //     3 : "d",
  //     4 : "e",
  //     5 : "f",
  //     6 : "g",
  //     7 : "h",
  //     8 : "i",
  //     9 : "j",
  // };
  // var ageArr = String(age).split("").map(Number);
  // for(i=0; i<ageArr.length; i++){
  //     answer += arr[ageArr[i]];
  // }
  // return answer;

  //문자열에도 인덱스가 있다..
  //"abcdefghij"["2"] => c
  return String(age)
    .split("")
    .map((n) => "abcdefghij"[n])
    .join("");
}
