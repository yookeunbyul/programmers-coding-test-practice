function solution(s) {
  const array = s.split("");
  let stack = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "(") {
      stack.push("(");
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}
