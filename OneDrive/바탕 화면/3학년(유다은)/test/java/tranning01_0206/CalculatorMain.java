package day01;

public class CalculatorMain {
	public static void main(String[] args) {
		Calculator addition = (a,b)->a+b;//람다식으로 calculator의 인터페이스를 받아 addition이라는 이름으로 a+b의 매개변수 값을 계산
		System.out.println(addition.calculate(5, 3));//5+3을 한 값을 출력
		
		Calculator multiplication = (a,b)->a*b;//람다식으로 calculator의 인터페이스를 받아 multiplication이라는 이름으로 a*b의 매개변수 값을 계산
		System.out.println(multiplication.calculate(5, 3));//5*3을 한 값을 출력
		
	}
}
