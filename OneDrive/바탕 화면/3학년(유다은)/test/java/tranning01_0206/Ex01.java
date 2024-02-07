package day01;

public class Ex01 {
	public static void main(String[] args) {
		int[] numbers = {1,2,3,4,5};//배열 초기화
		int sum=0;//sum 변수 정수형으로 초기화
		for(int i =0; i<numbers.length;i++) {//numbers.length=인덱스
			sum += numbers[i];//numbers[i]는 {1,2,3,4,5}안에 있는 값을 의미하며
			//numbers[0]을 sum에 더하고 저장 numbers[4]까지 반복하여 값을 저장
		}
		System.out.println("sum : " + sum);//15의 값이 나오며 sum의 값을 출력
	}
}
