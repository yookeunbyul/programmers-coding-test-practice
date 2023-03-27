function solution(nums) {
  //자신의 연구실에 있는 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다.
  //종류에 따라 번호를 붙여 구분합니다.
  //따라서 같은 종류의 폰켓몬은 같은 번호를 가지고 있습니다
  //4마리에서 4/2마리를 가져가니깐 2마리를 가져갈 수 있고 4개 중에 2개 고르는 방법은 6개

  //가질 수 있는 폰켓몬 종류 수의 최댓값은 2가 됩니다.

  //N/2마리의 폰켓몬을 선택하는 방법 중, 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아,
  //그때의 폰켓몬 종류 번호의 개수

  //우선 해시테이블로 종류에 따라 구분하자..

  //     const myMap = new Map();

  //     for(let i=0; i<nums.length; i++){
  //         let num = myMap.get(nums[i]) || 0;
  //         myMap.set(nums[i], num + 1);
  //     }

  //그냥 Set()으로 중복제거해도 되겠다 ^^..
  const mySet = [...new Set(nums)];

  //3종, 3종, 2종이 있는데
  //2마리, 3마리, 3마리 골라갈 수 있음.
  //그럼 종류는 최대 2종, 3종, 2종 골라갈 수 있다.

  //nums의 길이는 항상 짝수로 주어집니다.
  if (nums.length / 2 > mySet.length) {
    return mySet.length;
  } else {
    return nums.length / 2;
  }
}
