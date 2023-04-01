function combinations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);

  const result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combis = combinations(rest, n - 1);
    const combine = combis.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}

function is_prime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(nums) {
  //주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수
  //우선 nums에서 3개를 뽑는 모든 경우를 배열에 넣고 reduce한 뒤, 거기서 소수인지 아닌지 판별

  const sum = combinations(nums, 3).map((v) => v.reduce((a, b) => a + b));

  return sum.filter((v) => is_prime(v)).length;
}
