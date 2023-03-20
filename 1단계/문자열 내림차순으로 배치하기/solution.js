function solution(s) {
  //문자를 큰것부터 작은 순으로 정렬
  //대문자는 소문자보다 작은 것
  //     const sorted = [...s].sort();
  //     const stack = [];

  //     for(i=0; i<s.length; i++){
  //         stack.push(sorted.pop());
  //     }

  //     return stack.join("");

  return s.split("").sort().reverse().join("");
}
