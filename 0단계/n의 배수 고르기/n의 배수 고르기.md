### n의 배수 고르기

**정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.**

---

_입출력 예_

- 입출력 예 #1

  - numlist에서 3의 배수만을 남긴 [6, 9, 12]를 return합니다.

- 입출력 예 #2

  - numlist에서 5의 배수만을 남긴 [10, 5]를 return합니다.

- 입출력 예 #3

  - numlist에서 12의 배수만을 남긴 [120, 600, 12, 12]를 return합니다.

_solution.js_

```
function solution(n, numlist) {
    //조건의 true인 값만 담긴 배열 반환
    var answer = numlist.filter(num => num % n === 0);
    return answer;
}
```
