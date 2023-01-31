function solution(numbers) {
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

  //numbers.split("one");
  //=> ["", "twothreefourfivesixseveneightnine"]
  //numbers.split("one").join(1);
  //=> "1twothreefourfivesixseveneightnine"
  //이런식으로 문자를 숫자로 바꿔준다. (없는 경우 그냥 무시하고 넘어감)
  for (i = 0; i < str.length; i++) {
    numbers = numbers.split(str[i]).join(i);
  }

  return Number(numbers);
}
