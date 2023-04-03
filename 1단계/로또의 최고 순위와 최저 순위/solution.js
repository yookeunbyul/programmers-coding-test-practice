function solution(lottos, win_nums) {
  // 1부터 45까지의 숫자 중 6개를 찍어서 맞히는

  //민우 : 44, 1, 0, 0, 31 25
  //당첨 : 31, 10, 45, 1, 6, 19

  //최저 => 31, 1 => 2개 => 5등
  //최고 => 0, 0 => 다 맞을 경우 4개 => 3등

  //최고 순위와 최저 순위를 차례대로 배열에 담아서 return

  let max = 0;
  let min = 0;

  const ranking = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i])) {
      min++;
    }
  }

  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i]) || lottos[i] === 0) {
      max++;
    }
  }

  return [ranking[max], ranking[min]];
}
