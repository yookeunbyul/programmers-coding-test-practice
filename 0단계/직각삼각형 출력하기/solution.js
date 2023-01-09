const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  var num = Number(input[0]);
  var answer = "";
  for (i = 0; i < num; i++) {
    for (j = 0; j <= i; j++) {
      answer += "*";
    }
    answer += "\n";
  }
  console.log(answer);
});
