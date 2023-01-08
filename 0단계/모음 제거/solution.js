function solution(my_string) {
  // var answer = my_string.replace(/['a','e','i','o','u']/g, '');
  var answer = my_string.replace(/[aeiou]/g, "");
  return answer;
}
