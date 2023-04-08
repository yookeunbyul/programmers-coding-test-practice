function solution(babbling) {
  //연속해서 같은 발음을 하는 것을 어려워합니다. => 이게 포인트인거같은데..

  let answer = 0;

  for (const b of babbling) {
    //해당 단어들이 두번 이상 같은 말이 반복되면 다음으로 넘어간다
    if (/(aya|ye|woo|ma)\1+/g.test(b)) continue;

    if (b.split(/aya|ye|woo|ma/g).join("") === "") {
      answer++;
    }
  }

  return answer;
}
