function solution(my_string) {
  var answer = my_string.toLowerCase();
  //알파벳 순 정렬: Array.sort((a, b) => a > b ? 1 : -1);
  //반대 정렬 : Array.sort((a, b) => a > b ? -1 : 1);
  // return [...answer].sort((a, b) => a > b ? 1 : -1).join("");

  //그냥 문자열 배열 sort하면 알파벳 순으로 정렬 됨.
  return [...answer].sort().join("");
}
