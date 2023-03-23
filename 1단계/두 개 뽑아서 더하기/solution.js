function combinations(arr, n) {
  //2개를 뽑은 조합을 구하면 되는 문제
  //arr가 정수 배열, n이 뽑을 개수

  //만약 한개만 뽑는다면 그대로 순열을 반환
  if (n === 1) return arr.map((v) => [v]);

  //뽑아서 더한 값을 담을 배열
  const result = [];

  //fixed (명명된 매개변수) - 처리할 현재 요소
  //idx (선택적 매개변수) - 처리할 현재 요소의 인덱스
  //arr (선택적 매개변수) - forEach 메서드를 호출한 배열

  arr.forEach((fixed, idx, arr) => {
    //현재 선택된 idx 이후의 요소만 추출
    const rest = arr.slice(idx + 1);
    //idx 이전 요소는 제외하고 재귀 호출(정수를 뽑는 역할)
    const combis = combinations(rest, n - 1);
    //선택된 요소와 재귀 호출을 통해 구한 조합을 합쳐준다.
    const combine = combis.map((v) => [fixed, ...v]);
    //result에 결과값을 넣어준다.
    result.push(...combine);
  });

  return result;
}

function solution(numbers) {
  //두개씩 뽑아서
  //합을 구하고
  //중복을 제거한 후
  //올림차순으로 정렬해준다.
  return [
    ...new Set(combinations(numbers, 2).map((com) => com[0] + com[1])),
  ].sort((a, b) => a - b);
}

function solution(numbers) {
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      stack.push(numbers[i] + numbers[j]);
    }
  }

  //Set으로 중복 삭제
  return [...new Set(stack)].sort((a, b) => a - b);
}
