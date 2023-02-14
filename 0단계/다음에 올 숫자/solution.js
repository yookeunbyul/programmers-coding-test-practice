function solution(common) {
  //등차수열인지 확인
  if (common[1] - common[0] === common[2] - common[1]) {
    let plusLast = common.pop();
    let sub = common[1] - common[0];
    return plusLast + sub;
  } else {
    //등차수열 아니면 등비수열
    let mulLast = common.pop();
    let div = common[1] / common[0];
    return mulLast * div;
  }
}
