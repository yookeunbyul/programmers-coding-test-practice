function solution(s) {
  //'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False
  //'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴
  //대문자와 소문자는 구별 X

  const lower = [...s.toLowerCase()];
  let pcount = 0;
  let ycount = 0;

  for (const item of lower) {
    if (item === "p") {
      pcount++;
    }
    if (item === "y") {
      ycount++;
    }
  }

  if (pcount === 0 && ycount === 0) return true;

  return pcount === ycount ? true : false;
}

function solution(s) {
  //["ppooo", "", ""] === ["", "", "oooyy"]
  return (
    s.toLowerCase().split("y").length === s.toLowerCase().split("p").length
  );
}
