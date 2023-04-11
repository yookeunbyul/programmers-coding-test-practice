function solution(s) {
  let answer = [];
  const string = s.split(" ");

  string.forEach((letter) => {
    let stack = "";

    for (let i = 0; i < letter.length; i++) {
      if (i === 0) {
        stack += letter[i].toUpperCase();
      } else {
        stack += letter[i].toLowerCase();
      }
    }

    answer.push(stack);
  });

  return answer.join(" ");
}
