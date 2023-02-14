//정규식 tip: 캐럿 기호 ^는 텍스트의 시작, 달러 기호 $는 텍스트의 끝을 나타낸다.

function solution(babbling) {
  //aya, ye, woo, ma
  let answer = 0;

  //"yemawoo".split(/aya|ye|ma|woo/g).join("")을 하면
  //ye를 기준으로 자르면 ["","mawoo"]
  //ma를 기준으로 자르면 ["", "", "woo"]
  //woo를 기준으로 자르면 ["", "", ""]
  //이렇게 공백만 남기때문에 join("")해주면 ""가 된다.
  babbling.map((b) => {
    if (b.split(/aya|ye|ma|woo/g).join("") === "") {
      answer++;
    }
  });

  return answer;
}
