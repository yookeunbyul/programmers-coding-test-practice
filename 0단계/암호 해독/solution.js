function solution(cipher, code) {
  // var answer = [];
  // var arr = [...cipher];
  // for(i=code; i<=arr.length; i+=code){
  //     answer.push(arr[i-1]);
  // }
  // return answer.join("");

  var answer = "";
  for (i = code; i <= cipher.length; i += code) {
    answer += cipher[i - 1];
  }
  return answer;
}
