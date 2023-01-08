function solution(s1, s2) {
  var answer = 0;
  //배열이기 때문에 map으로 문자열 하나하나 비교
  s1.map((word1) =>
    s2.map((word2) => {
      if (word1 === word2) {
        //같을 때마다 +1
        answer++;
      }
    })
  );
  return answer;
}
