package day01;

public class Circle implements Shape { // Shape 인터페이스를 구현하는 Circle 클래스 선언

    private double radius; // 원의 반지름을 나타내는 변수

    // 생성자
    public Circle(double radius) {
        this.radius = radius; // 반지름으로 초기화
    }

    @Override
    public void draw() { // Shape 인터페이스의 추상 메서드를 구현한 draw 메서드
        System.out.println("Drawing a circle"); // Drawing a circle를 출력
    }

    @Override
    public double calculateArea() { // Shape 인터페이스의 추상 메서드를 구현한 calculateArea 메서드
        return Math.PI * radius * radius; // 원의 넓이를 계산하여 반환
    }
}
