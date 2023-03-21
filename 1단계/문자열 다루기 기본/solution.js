function solution(s) {
  //문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성 => t 리턴

  //숫자가 아닌 값은 true를 리턴
  const array = [...s].map((n) => isNaN(n / 1));

  //모두 숫자면 true 리턴(false면 숫자임)
  return array.every((n) => n === false) && (s.length === 4 || s.length === 6)
    ? true
    : false;
}
