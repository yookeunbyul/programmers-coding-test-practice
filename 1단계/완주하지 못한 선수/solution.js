function solution(participant, completion) {
  const myMap = new Map();

  for (let i = 0; i < participant.length; i++) {
    let num = (myMap.get(participant[i]) || 0) + 1;
    myMap.set(participant[i], num);
  }

  for (let j = 0; j < completion.length; j++) {
    let v = myMap.get(completion[j]);
    myMap.set(completion[j], v - 1);
  }

  for (const [name, value] of [...myMap]) {
    if (value > 0) return name;
  }
}
