function solution(id_pw, db) {
  //     let idCheck = false;
  //     let pwCheck = false;

  //     for (d of db){
  //         if(d[0] === id_pw[0]){
  //             idCheck = true;
  //             if(d[1] === id_pw[1]){
  //                 pwCheck = true;
  //             }
  //         }

  //         if(d[0] === id_pw[0]){
  //             idCheck = true;
  //             if(d[1] !== id_pw[1]){
  //                 pwCheck = false;
  //             }
  //         }
  //     }

  //     if(idCheck && pwCheck){
  //         return "login";
  //     }
  //     if(idCheck && pwCheck === false){
  //         return "wrong pw";
  //     }
  //     if(idCheck === false){
  //         return "fail";
  //     }
  let answer = "fail";

  for (d of db) {
    if (d[0] === id_pw[0] && d[1] === id_pw[1]) {
      answer = "login";
    }
    if (d[0] === id_pw[0] && d[1] !== id_pw[1]) {
      answer = "wrong pw";
    }
  }

  return answer;
}
