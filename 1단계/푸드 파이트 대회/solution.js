function solution(food) {
  //한 선수는 제일 왼쪽에 있는 음식부터 오른쪽으로,
  //다른 선수는 제일 오른쪽에 있는 음식부터 왼쪽으로 순서대로 먹는 방식
  //중앙에는 물을 배치(0)

  //두 선수가 먹는 음식의 종류와 양이 같아야 하며, 음식을 먹는 순서도 같아야 합니다.
  //1번 음식을 3개, 2번 음식을 4개, 3번 음식을 6개 준비했으며, 물을 편의상 0번 음식
  //아 음식을 2명이 나눠먹으니깐 음식 개수 / 2...

  //"1223330333221"

  //i를 (food[i] / 2) 반복하면 되는거자나
  //i.repeat(food[i] / 2)

  let answer = "";

  for (let i = 1; i < food.length; i++) {
    answer += String(i).repeat(Math.floor(food[i] / 2));
  }

  return answer + "0" + [...answer].reverse().join("");
}
