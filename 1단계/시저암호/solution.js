function solution(s, n) {
  //문자마다 n씩 밀어서 암호문 return
  //아스키코드 사용
  //65~90까지 대문자, 97부터 122까지 소문자(알파벳은 26개)
  //문자열.charCodeAt(인덱스) => 문자열의 해당 인덱스 문자 아스키코드 리턴
  //String.fromCharCode(아스키코드) => 아스키코드를 해당 문자로 리턴

  let answer = "";

  for (let i = 0; i < s.length; i++) {
    //공백이라면 공백을 추가(공백은 아무리 밀어도 공백)
    if (s[i] === " ") {
      answer += " ";
    } else {
      //공백이 아니라면
      let code = s.charCodeAt(i);
      //만약 대문자라면
      if (code <= 90) {
        //n씩 밀어준다.
        code += n;

        //밀어준 코드가 대문자 아스키코드보다 커진다면
        if (code > 90) code -= 26;
      } else {
        //소문자라면
        //n씩 밀어준다.
        code += n;

        //밀어준 코드가 소문자 아스키코드보다 커진다면
        if (code > 122) code -= 26;
      }
      answer += String.fromCharCode(code);
    }
  }

  return answer;
}
