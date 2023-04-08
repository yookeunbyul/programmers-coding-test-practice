function solution(players, callings) {
  const myMap = new Map();

  for (let i = 0; i < players.length; i++) {
    myMap.set(players[i], i);
  }

  //get해서 얻는 값 자체가 index..

  callings.forEach((v) => {
    //해설진이 부르는 선수의 인덱스를 구하고
    let idx = myMap.get(v);
    //앞 선수의 이름을 구하고
    let front = players[idx - 1];
    //서로 자리를 바꾼다
    players[idx - 1] = v;
    players[idx] = front;
    //map 객체에서 index를 수정해준다.
    myMap.set(v, idx - 1);
    myMap.set(front, idx);
  });

  return [...myMap].sort((a, b) => a[1] - b[1]).map((v) => v[0]);
}
