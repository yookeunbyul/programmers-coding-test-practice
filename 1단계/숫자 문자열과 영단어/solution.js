function solution(s) {
  //s가 의미하는 원래 숫자를 return

  const str = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (i = 0; i < str.length; i++) {
    s = s.split(str[i]).join(i);
  }

  return Number(s);
}
