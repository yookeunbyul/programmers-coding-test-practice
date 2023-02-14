function solution(numlist, n) {
  //a-b를 기준으로 0보다 작으면 a가 b 앞에, 0보다 크면 a가 b 뒤에(오름차순)
  //0이면 그냥 그 자리에
  // return numlist.sort((a,b) => a-b);

  //절대값 차이를 기준으로 절대값 차이가 작은 거부터 오름차순 정렬
  //a=4) 4-4 = 0
  //b=5) 5-4 = 1
  //0-1 = -1이므로 4가 5보다 앞에 위치
  // return numlist.sort((a,b) => Math.abs(a-n) - Math.abs(b-n));

  return numlist.sort((a, b) => {
    //절대값이 같으면 그냥 큰 숫자가 앞에 오면 되니깐 숫자 기준으로 내림차순
    if (Math.abs(a - n) === Math.abs(b - n)) {
      return b - a;
    }
    //절대값 차이를 기준으로 절대값 차이가 작은 거부터 오름차순 정렬
    return Math.abs(a - n) - Math.abs(b - n);
  });
}
