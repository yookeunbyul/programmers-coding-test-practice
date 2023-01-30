### k의 개수

**1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.**

---

_입출력 예_

- 입출력 예 #1

  - 본문과 동일합니다.

- 입출력 예 #2

  - 10부터 50까지 5는 15, 25, 35, 45, 50 총 5번 등장합니다. 따라서 5를 return 합니다.

- 입출력 예 #3

  - 3부터 10까지 2는 한 번도 등장하지 않으므로 0을 return 합니다.

_solution.js_

```
function solution(i, j, k) {
    var arr = [];
    for(n=i; n<=j; n++){
        arr.push(n);
    }

    //숫자를 문자열로 다 붙인 후
    //하나씩 떨어트려서 필터로 k와 같은 값만 걸러낸다.
    return arr.join("").split("").map(Number).filter(n => n === k).length;
}
```
