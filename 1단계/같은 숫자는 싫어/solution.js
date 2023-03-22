function solution(arr) {
  //배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return
  const stack = [];

  for (const item of arr) {
    if (stack[stack.length - 1] !== item) {
      stack.push(item);
    }
  }

  return stack;
}
