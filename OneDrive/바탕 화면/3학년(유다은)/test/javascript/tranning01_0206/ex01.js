const numbers = [1, 2, 3, 4, 5]; //배열 정의
var sum = 0; //sum 변수 초기화
for (var i = 0; i < numbers.length; i++) {
  //배열의 각 요소를 반복하여 합계 계산
  sum += numbers[i]; //numbers[]안에 sum에 각 값을 저장
}
console.log("sum :" + sum); //콘솔 출력 => 15값이 나온다.
