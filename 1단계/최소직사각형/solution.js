function solution(sizes) {
  //두 개의 모서리를 비교하여 큰 값을 전부 가로 작은 값을 전부 세로로 두면
  //각 모서리의 길이의 최댓값이 답이 되지않을까?

  //(가로길이 최대값 * 세로길이 최대값)을 하면 모든 명함을 수납할 수 있을 것이다.
  //근데 이렇게 만들면 쓸데없는 공간이 낭비되기 때문에 다 담을 수 있는 한에서 가장 작게 만들어야 한다.
  //그럼 어떻게 해야할까?
  //(긴 길이 중의 최대값 * 짧은 길이 중에 최대값)을 해주면 답을 찾을 수 있을 것이다.

  const w = [];
  const h = [];

  for (const item of sizes) {
    if (item[0] > item[1]) {
      w.push(item[0]);
      h.push(item[1]);
    } else {
      w.push(item[1]);
      h.push(item[0]);
    }
  }

  return Math.max(...w) * Math.max(...h);
}
