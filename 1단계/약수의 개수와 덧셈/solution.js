function solution(left, right) {
  //left부터 right까지의 수를 구하고
  //그 수들의 약수의 개수를 구해서
  //짝수면 더하고 홀수면 뺀 값을 return

  let answer = 0;

  const number = [];

  for (i = left; i <= right; i++) {
    number.push(i);
  }

  const div = new Map();

  for (const num of number) {
    for (i = 1; i <= num; i++) {
      const array = div.get(num) || [];
      if (num % i === 0) {
        div.set(num, [...array, i]);
      }
    }
  }

  //약수 개수 배열
  const divNum = [...div].flatMap((n) => n[1].length);

  return number.reduce((a, b, i) => a + b * (divNum[i] % 2 === 0 ? 1 : -1), 0);
}

function solution(left, right) {
  //제곱근이 정수면 약수의 개수가 홀수다

  let answer = 0;

  for (i = left; i <= right; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      answer -= i;
    } else {
      answer += i;
    }
  }

  return answer;
}
