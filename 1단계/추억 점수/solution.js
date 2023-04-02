function solution(name, yearning, photo) {
  const myMap = new Map();

  for (let i = 0; i < name.length; i++) {
    myMap.set(name[i], yearning[i]);
  }

  return photo.map((arr) =>
    arr.map((v) => myMap.get(v) || 0).reduce((a, b) => a + b, 0);
  );
}
