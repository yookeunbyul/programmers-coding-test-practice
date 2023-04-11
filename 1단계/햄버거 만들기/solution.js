function solution(ingredient) {
  //1: 빵, 2: 야채, 3: 고기
  //1,2,3,1

  let answer = 0;
  let stack = [];

  for (const i of ingredient) {
    stack.push(i);

    //while로 하면 길이가 4이하가 될 경우 그냥 종료됨
    if (stack.length >= 4) {
      if (
        stack[stack.length - 4] === 1 &&
        stack[stack.length - 3] === 2 &&
        stack[stack.length - 2] === 3 &&
        stack[stack.length - 1] === 1
      ) {
        answer++;
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
      }
    }
  }

  return answer;
}
