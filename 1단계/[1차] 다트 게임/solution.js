function solution(dartResult) {
  //문자열.match(정규식) : "문자열"에서 "정규표현식"에 매칭되는 항목들을 배열로 반환
  const array = dartResult.match(/(\d+)([^0~9][*#]?)/g);

  //\d : 숫자
  //+ : 최소 한개 여러개
  //[] : 괄호안의 문자들 중 하나. or 처리 묶음
  //() : 그룹화
  //[^0~9] : 숫자가 아닌 것을 찾는다
  //[*#] : *#를 찾는다
  //? : 없거나 최대 한개만

  let stack = [];
  let num = 0;

  for (const item of array) {
    for (let i = 0; i < item.length; i++) {
      //숫자인데
      if (item[i] % 1 === 0) {
        //10이면
        if (item[i] === "1" && item[i + 1] === "0") {
          //num에 바로 10 넣어주고
          num = 10;
          //0을 건너뛰기위해 i를 올려준다.
          i++;
        } else {
          num = Number(item[i]);
        }
      } else if (item[i] === "S") {
        stack.push(num);
      } else if (item[i] === "D") {
        stack.push(Math.pow(num, 2));
      } else if (item[i] === "T") {
        stack.push(Math.pow(num, 3));
      } else if (item[i] === "#") {
        //해당 점수는 마이너스
        stack[stack.length - 1] *= -1;
      } else if (item[i] === "*") {
        //해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다.
        stack[stack.length - 1] *= 2;
        stack[stack.length - 2] *= 2;
      }
    }
  }

  return stack.reduce((a, b) => a + b, 0);
}

//문자열 안 쓰고 할 수 있다.

function solution(dartResult) {
  let stack = [];
  let num = 0;

  for (let i = 0; i < dartResult.length; i++) {
    //숫자인데
    if (dartResult[i] % 1 === 0) {
      //10이면
      if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
        //num에 바로 10 넣어주고
        num = 10;
        //0을 건너뛰기위해 i를 올려준다.
        i++;
      } else {
        num = Number(dartResult[i]);
      }
    } else if (dartResult[i] === "S") {
      stack.push(num);
    } else if (dartResult[i] === "D") {
      stack.push(Math.pow(num, 2));
    } else if (dartResult[i] === "T") {
      stack.push(Math.pow(num, 3));
    } else if (dartResult[i] === "#") {
      //해당 점수는 마이너스
      stack[stack.length - 1] *= -1;
    } else if (dartResult[i] === "*") {
      //해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다.
      stack[stack.length - 1] *= 2;
      stack[stack.length - 2] *= 2;
    }
  }

  return stack.reduce((a, b) => a + b, 0);
}
