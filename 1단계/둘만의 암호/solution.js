function solution(s, skip, index) {
  //aukks
  //a ; b c d e f => c e f g 'h' => 2개가 제거되면 코드가 +2(104)
  //u ; v w x y z => v x y z 'a' => 1개가 제거되면 코드가 +1
  //k ; l m n o 'p'
  //k ; l m n o 'p'
  //s ; t u v w x => t u v x 'y' => 1개가 제거되면 코드가 +1

  let answer = "";
  const code = [...s].map((v, i) => s.charCodeAt(i));
  const skipCode = [...skip].map((v, i) => skip.charCodeAt(i));

  code.forEach((c) => {
    let fixed = c;

    for (let i = 0; i < index; i++) {
      fixed++;
      while (skipCode.includes(fixed)) fixed++;

      //z를 넘으면 다시 a로
      if (fixed > 122) fixed = 97;
      //a를 skip할 수 있으니깐 한번 더 걸러준다.
      while (skipCode.includes(fixed)) fixed++;
    }

    answer += String.fromCharCode(fixed);
  });

  return answer;
}
