function solution(s) {
  //짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열
  //(각 단어는 하나 이상의 공백문자로 구분되어) => 공백이 하나 이상이다?

  return s
    .split(" ")
    .map((string) =>
      string
        .split("")
        .map((letter, idx) =>
          idx % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}
