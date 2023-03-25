function solution(a, b, n) {
  //20병 => 10병 받고 => 5병 받고 => 1 병 + 2병 받고 => 1병 + 1병 받고 => 1병 받고
  //10 + 5 + 2 + 1 + 1 = 19병

  //1.상빈이는 20개 잇고 2병을 주면 1병을 다시 준다.
  //2.상빈이는 20개 잇고 3병을 주면 1병을 다시 준다.

  //보유 중인 빈 병이 a개 미만이면, 추가적으로 빈 병을 받을 순 없습니다. => 이게 예외
  //상빈이가 받을 수 있는 콜라의 병 수를 return

  let answer = 0;
  let coke = n;

  //coke가 a 미만이 될 때까지 돌린다
  while (coke >= a) {
    answer += Math.floor(coke / a) * b;
    coke = Math.floor(coke / a) * b + Math.floor(coke % a);
  }

  return answer;
}
