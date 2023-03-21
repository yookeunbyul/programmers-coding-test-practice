function max(n, m) {
  //최대공약수
  let max = 1;

  for (i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      max = i;
    }
  }

  return max;
}

function min(n, m) {
  //최소공배수
  let min = 1;

  while (1) {
    if (min % n === 0 && min % m === 0) {
      break;
    }
    min++;
  }

  return min;
}

function solution(n, m) {
  return [max(n, m), min(n, m)];
}
