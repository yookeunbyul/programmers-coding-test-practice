### 문자열 내 p와 y의 개수

**대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.**

**예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.**

---

_입출력 예_

- 입출력 예 #1

  - 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

- 입출력 예 #2

  - 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

_solution.js_

```
function solution(s){
    //'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False
    //'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴
    //대문자와 소문자는 구별 X

     const lower = [...s.toLowerCase()];
     let pcount = 0;
     let ycount = 0;

     for(const item of lower){
         if(item === "p"){
             pcount++;
         }
         if(item === "y"){
             ycount++;
         }
     }

     if(pcount === 0 && ycount === 0) return true;

     return pcount === ycount ? true : false;
}

function solution(s){
    //["ppooo", "", ""] === ["", "", "oooyy"]
    return s.toLowerCase().split("y").length === s.toLowerCase().split("p").length;
}
```
