function solution(number) {
  //이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사
  //학생들 중 삼총사를 만들 수 있는 방법의 수를 return

  let answer = 0;

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer++;
        }
      }
    }
  }

  return answer;
}

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

function solution(number) {
  //세개씩 뽑아서
  //합을 구하고
  //0인 값만 filter해서 길이를 구한다.
  return combinations(number, 3)
    .map((com) => com[0] + com[1] + com[2])
    .filter((n) => n === 0).length;
}
