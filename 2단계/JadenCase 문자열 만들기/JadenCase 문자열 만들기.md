### JadenCase 문자열 만들기

**JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고) 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.**

---

_입출력 예_

- 입출력 예 #1

  - "3people unFollowed me" => "3people Unfollowed Me"

- 입출력 예 #2

  - "for the last week" => "For The Last Week"

_solution.js_

```
function solution(s) {
    let answer = [];
    const string = s.split(" ");

    string.forEach(letter => {
        let stack = "";

        for(let i=0; i<letter.length; i++){
            if(i === 0){
                stack += letter[i].toUpperCase();
            }else{
                stack += letter[i].toLowerCase();
            }
        }

        answer.push(stack);
    })

    return answer.join(" ");
}
```
