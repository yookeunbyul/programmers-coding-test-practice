function solution(num, k) {
  //num 안에 k가 있으면 k의 자릿수를 return, 없으면 -1 return
  var answer = [...String(num)].map(Number);
  return answer.includes(k) ? answer.indexOf(k) + 1 : -1;
}
