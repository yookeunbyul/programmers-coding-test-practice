### OX퀴즈

**덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.**

---

_입출력 예_

- 입출력 예 #1

  - 3 - 4 = -3 은 틀린 수식이므로 "X", 5 + 6 = 11 은 옳은 수식이므로 "O" 입니다. 따라서 ["X", "O"]를 return합니다.

- 입출력 예 #2

  - 19 - 6 = 13 은 옳은 수식이므로 "O", 5 + 66 = 71 은 옳은 수식이므로 "O", 5 - 15 = 63 은 틀린 수식이므로 "X", 3 - 1 = 2는 옳은 수식이므로 "O" 따라서 ["O", "O", "X", "O"]를 return합니다.

_solution.js_

```
function solution(quiz) {
    let arr = quiz.map(q => q.split(" "));
    let answer = [];

    for(a of arr){
        let first = Number(a[0]);
        if(a[1] === "-"){
            first -= Number(a[2]);
            if(first === Number(a[4])){
                answer.push("O");
            } else {
                answer.push("X");
            }
        }
        if(a[1] === "+"){
            first += Number(a[2]);
            if(first === Number(a[4])){
                answer.push("O");
            } else {
                answer.push("X");
            }
        }
    }
    return answer;
}
```
