function solution(quiz) {
  let arr = quiz.map((q) => q.split(" "));
  let answer = [];

  for (a of arr) {
    let first = Number(a[0]);
    if (a[1] === "-") {
      first -= Number(a[2]);
      if (first === Number(a[4])) {
        answer.push("O");
      } else {
        answer.push("X");
      }
    }
    if (a[1] === "+") {
      first += Number(a[2]);
      if (first === Number(a[4])) {
        answer.push("O");
      } else {
        answer.push("X");
      }
    }
  }
  return answer;
}
