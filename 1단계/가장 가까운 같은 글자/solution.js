function solution(s) {
  //indexOf() => 인덱스를 반환하고, 요소가 존재하지 않으면 -1을 반환합니다.
  //lastIndexOf() => 마지막 인덱스를 반환하고, 요소가 존재하지 않으면 -1을 반환합니다.

  const stack = [];
  const answer = [];
  const array = [...s];

  for (let i = 0; i < s.length; i++) {
    let item = s[i];
    if (stack.includes(item)) {
      answer.push(stack.length - stack.lastIndexOf(item));
      stack.push(item);
    } else {
      answer.push(stack.indexOf(item));
      stack.push(item);
    }
  }

  return answer;
}
