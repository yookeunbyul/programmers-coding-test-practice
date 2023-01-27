### A로 B 만들기

**문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.**

---

_입출력 예_

- 입출력 예 #1

  - "olleh"의 순서를 바꾸면 "hello"를 만들 수 있습니다.

- 입출력 예 #2

  - "allpe"의 순서를 바꿔도 "apple"을 만들 수 없습니다.

_solution.js_

```
function solution(before, after) {
    //문자열을 알파벳 순으로 정렬해서(똑같이 만드는) 비교했을 때 같으면 1 아니면 0.
    var beArr = [...before].sort().join("");
    var afArr = [...after].sort().join("");
    return beArr === afArr ? 1 : 0;
}
```
