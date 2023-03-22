function solution(d, budget) {
  //최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.
  //1,000원보다 적은 금액을 지원해 줄 수는 없습니다.
  //최대 몇 개의 부서에 물품을 지원할 수 있는지 return

  let answer = 0;
  const sorted = [...d].sort((a, b) => a - b);

  //for..of도 break 가능
  for (const item of sorted) {
    budget -= item;
    if (budget < 0) {
      break;
    }
    answer++;
  }

  return answer;
}
