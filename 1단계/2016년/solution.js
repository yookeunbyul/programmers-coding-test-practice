function solution(a, b) {
  //new Date() 객체를 사용하면 간단하게 해결할 수 있다..

  //month는 일반 월이 아니라 인덱스로 되어있어서 1월이라면 0이 들어가야한다.
  //date: 2016-05-23T15:00:00.000Z
  const date = new Date(2016, a - 1, b);

  //date.toString(): Tue May 24 2016 00:00:00 GMT+0900 (Korean Standard Time)
  return date.toString().slice(0, 3).toUpperCase();

  // const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  //0~6이 일요일부터 토요일까지
  // return week[date.getDay()];
}
