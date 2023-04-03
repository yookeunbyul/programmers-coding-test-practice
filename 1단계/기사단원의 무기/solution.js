function solution(number, limit, power) {
  let stack = [];
  const array = Array.from(new Array(number), (_, i) => i + 1);

  array.forEach((v) => {
    let num = [];

    for (let i = 0; i * i <= v; i++) {
      if (v % i === 0) {
        //제곱근 범위로 먼저 약수를 구하고
        num.push(i);
        //제곱근 범위로 구한 약수로 나눈 값도 약수이기 때문에
        //중복을 방지하기위해 나눈값과 제곱근 범위로 구한 약수가 다를 때 나눈 값을 약수로 추가
        if (v / i !== i) num.push(v / i);
      }
    }

    stack.push(num.length);
    num = [];
  });

  return stack.map((v) => (v > limit ? power : v)).reduce((a, b) => a + b);
}
