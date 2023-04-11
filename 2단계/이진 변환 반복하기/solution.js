function solution(s) {
  //x의 모든 0을 제거합니다.
  //x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.

  let array = [...s];
  let one = [];
  let zero = 0;
  let count = 0;

  while (array.length > 1) {
    count++;

    for (const item of array) {
      if (item === "1") {
        one.push(item);
      } else {
        zero += 1;
      }
    }

    array = [...one.length.toString(2)];
    one = [];
  }

  return [count, zero];
}
