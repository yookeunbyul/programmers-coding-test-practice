function solution(numbers, direction) {
  if (direction === "right") {
    //Array.pop() : 배열의 마지막 요소를 제거한 후, 제거한 요소를 반환
    //Array.unshift() : 배열의 첫 번째 자리에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환
    numbers.unshift(numbers.pop());
  } else {
    //Array.shift() : 배열의 첫 번째 요소를 제거한 후, 제거한 요소를 반환
    //Array.push() : 배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환
    numbers.push(numbers.shift());
  }
  return numbers;
}
