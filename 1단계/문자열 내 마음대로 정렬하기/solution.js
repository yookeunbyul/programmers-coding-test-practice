function solution(strings, n) {
  //아스키코드를 비교해서 정렬하면 되는군나
  //예외 => 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
  return strings.sort((a, b) => {
    if (a.charCodeAt(n) === b.charCodeAt(n)) {
      //오름차순 정렬
      return a > b ? 1 : -1;
    }

    //문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬
    return a.charCodeAt(n) - b.charCodeAt(n);
  });
}
