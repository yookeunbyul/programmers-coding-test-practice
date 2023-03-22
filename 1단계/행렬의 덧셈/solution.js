function solution(arr1, arr2) {
  return arr1.map((a1, index1) =>
    a1.map((a, index2) => a + arr2[index1][index2])
  );
}
