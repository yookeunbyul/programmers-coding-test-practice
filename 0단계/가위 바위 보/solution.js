function solution(rsp) {
  var answer = "";
  for (let i of rsp) {
    if (i === "2") {
      answer += "0";
    }
    if (i === "0") {
      answer += "5";
    }
    if (i === "5") {
      answer += "2";
    }
  }
  return answer;
}

//다른 사람의 풀이
function solution(rsp) {
  var arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  return [...rsp].map((n) => arr[n]).join("");
}
