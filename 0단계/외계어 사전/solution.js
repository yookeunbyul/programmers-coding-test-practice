function solution(spell, dic) {
  //Array.every() : 조건에 모두 만족하면 true를 리턴.
  //Array.some() : 조건을 하나라도 만족하면 true를 리턴.

  return dic.some((d) => spell.sort().toString() === [...d].sort().toString())
    ? 1
    : 2;
  //"d,x,z" === "d,x,z"
}
