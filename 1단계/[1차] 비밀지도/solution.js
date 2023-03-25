function solution(n, arr1, arr2) {
  //원래의 비밀지도를 해독하여 '#', 공백으로 구성된 문자열 배열로 출력하라.
  //벽이 1(#), 공백이 0(" ")
  //어느 하나라도 벽(1)인 부분은 전체 지도에서도 벽(1) => 둘 중 하나가 1이면 1
  //모두 공백(0)인 부분은 전체 지도에서도 공백(0) => 모두 0이어야 0

  // padStart(n, 0) => 왼쪽부터 n자리를 맞추도록 0을 채운다.

  const A = arr1.map((num) => num.toString(2).padStart(n, 0));
  const B = arr2.map((num) => num.toString(2).padStart(n, 0));

  const sum = [];

  for (let i = 0; i < n; i++) {
    //1,2이면 벽이고 0이면 공백
    sum.push((Number(A[i]) + Number(B[i])).toString().padStart(n, 0));
  }

  const stack = [];

  for (const item of sum) {
    let answer = "";

    for (let j = 0; j < n; j++) {
      if (item[j] === "1" || item[j] === "2") {
        answer += "#";
      } else {
        answer += " ";
      }
    }

    stack.push(answer);
    answer = "";
  }

  return stack;
}
