package day01;

public class Circle_Main {
	public static void main(String[] args) {
		Circle circle= new Circle(5.0) {};//circle함수에 radius의 값을 선언
		circle.draw();//Drawing a circle이라고 출력할 수 있도록 메소드를 호출
		
		System.out.println("원의 넓이" + circle.calculateArea());
		//추상클래스를 상속받아 circle의 넓이 값을 출력
		
	}
}
