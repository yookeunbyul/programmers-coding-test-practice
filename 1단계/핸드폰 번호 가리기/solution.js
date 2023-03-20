function solution(phone_number) {
  //전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열
  //phone_number.slice(-4) : 뒤에 네자리 slice
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}
