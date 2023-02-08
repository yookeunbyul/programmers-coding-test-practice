function solution(A, B) {
  let arr = [...A];

  //for문으로 문자열 한바퀴 돌리고
  for (i = 0; i <= arr.length; i++) {
    if (A === B) {
      return i;
    } else {
      //맨 뒤 원소를 제거 한 후 맨 앞에 추가
      arr.unshift(arr.pop());
      if (arr.join("") === B) {
        return i + 1;
      }
    }
  }

  //다 돌려도 없으면 -1 리턴.
  return -1;
}
