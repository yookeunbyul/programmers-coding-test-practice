function solution(lines) {
  //해시테이블 사용..(상수시간 O(1))

  //[0,3] => map을 사용해서 '01' '12' '23' 라인을 1씩 그어준다
  //겹치면 value를 증가
  //value가 중복이 있는 key의 갯수를 모두 더해서 리턴

  const myMap = new Map();

  for (const item of lines) {
    for (i = item[0]; i < item[1]; i++) {
      let key = String(i) + (i + 1);
      //초기값 0으로 설정
      myMap.set(key, (myMap.get(key) || 0) + 1);
    }
  }

  return [...myMap].filter((m) => m[1] > 1).length;
}
