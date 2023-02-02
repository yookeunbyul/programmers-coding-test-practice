function solution(my_string) {
  let arr = my_string.split(" ");
  let answer = Number(arr[0]);

  //a + b나 a - b가 아닌 a에다가 값을 더하고 빼는 방식으로
  for (i = 1; i < arr.length; i += 2) {
    if (arr[i] === "+") {
      answer = answer + Number(arr[i + 1]);
    }
    if (arr[i] === "-") {
      answer = answer - Number(arr[i + 1]);
    }
  }

  return answer;
}
