function solution(answers) {
  //수포자 삼인방
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  //Tip: 반복되는 패턴이라면 길이로 나눴을 때 나머지가 같은 수는 똑같은 값을 인출하기 때문이다.

  let ranking = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === one[i % one.length]) ranking[0]++;
    if (answers[i] === two[i % two.length]) ranking[1]++;
    if (answers[i] === three[i % three.length]) ranking[2]++;
  }

  const max = Math.max(...ranking);
  const stack = [];

  for (let i = 0; i < ranking.length; i++) {
    if (max === ranking[i]) {
      stack.push(i + 1);
    }
  }

  return stack;
}
