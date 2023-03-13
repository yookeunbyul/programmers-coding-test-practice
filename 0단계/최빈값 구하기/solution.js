function solution(array) {
  //해시테이블이구나..!
  //원소를 key 값으로 해서 등장할 때마다 value를 올려주는 그 ..방법이구나. 하~

  let myMap = new Map();

  for (const item of array) {
    //초기값 0으로 설정
    myMap.set(item, (myMap.get(item) || 0) + 1);
  }

  //[...myMap] : [[1,1],[2,1],[3,3],[4,1]]
  //뒤에 value 값을 기준으로 내림차순 정렬
  myMap = [...myMap].sort((a, b) => b[1] - a[1]);

  //최빈값을 리턴
  // console.log(myMap);
  //myMap의 길이가 1이거나 첫번째 value가 두번째 value보다 큰 경우에 맨 앞의 key 리턴
  return myMap.length === 1 || myMap[0][1] > myMap[1][1] ? myMap[0][0] : -1;
}
