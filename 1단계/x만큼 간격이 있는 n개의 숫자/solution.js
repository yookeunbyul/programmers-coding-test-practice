function solution(x, n) {
  //x부터 시작해 x씩 증가하는 숫자를 n개 지니는 배열을 리턴
  //[2*1, 2*2, 2*3, 2*4, 2*5]
  //인덱스는 0부터 시작하니깐 i+1
  return Array.from(new Array(n), (_, i) => (i + 1) * x);
}
