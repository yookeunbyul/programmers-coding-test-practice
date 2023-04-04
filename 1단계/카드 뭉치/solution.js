function solution(cards1, cards2, goal) {
  for (const letter of goal) {
    if (cards1[0] === letter) {
      cards1.shift();
    } else if (cards2[0] === letter) {
      cards2.shift();
      //여기서 if문이 안걸리면 순서가 다른 것이므로 바로 no 리턴
    } else {
      return "No";
    }
  }

  //for문을 다 통과했으면 순서가 맞는 것이므로 yes 리턴
  return "Yes";
}
