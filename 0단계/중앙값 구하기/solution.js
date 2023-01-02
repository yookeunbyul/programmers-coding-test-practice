const solution = (array) => {
  //오름차순 정렬(Array.sort())
  array.sort((a, b) => {
    return a - b;
  });
  return array[parseInt(array.length / 2)];
};
