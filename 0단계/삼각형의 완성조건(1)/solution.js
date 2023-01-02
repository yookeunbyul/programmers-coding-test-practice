function solution(sides) {
  //Math.max(1,2,3);
  // var maxSide = Math.max(...sides);
  // var smallSides = sides.filter(n => n !== maxSide);
  // var sum = smallSides.reduce((a,b) => a + b);
  // var answer = maxSide < sum ? 1 : 2;
  // return answer;

  //이렇게 어렵게 안해도 될 것을..!!!!!
  //sides.reduce((a,b) => a+b) - Math.max(..sides) : 나머지 두변의 합
  var answer =
    sides.reduce((a, b) => a + b) - Math.max(...sides) > Math.max(...sides)
      ? 1
      : 2;
  return answer;
}
