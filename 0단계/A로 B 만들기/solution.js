function solution(before, after) {
  //문자열을 알파벳 순으로 정렬해서(똑같이 만드는) 비교했을 때 같으면 1 아니면 0.
  var beArr = [...before].sort().join("");
  var afArr = [...after].sort().join("");
  return beArr === afArr ? 1 : 0;
}
