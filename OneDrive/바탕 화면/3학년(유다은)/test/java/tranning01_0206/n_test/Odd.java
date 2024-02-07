package odd_number;

public class Odd {
	//양의 정수 n이 매개변수로 주어질때, n이 홀수라면
	//n이하의 홀수인 모든 양의 정수의 합을 return
	//n이 짝수라면 n이하의 짝수인 모든 양의 정수의 제곱의 합을 return
	public int solution(int n) {
		int answer =0;
		for(int i=1;i<=n;i++) {
			if(n%2==1 && i%2==1) {
				answer+=i;
			}
			else if(n%2==0 && i%2==0) {
				answer += i*i;
			}
		}
		return answer;
	}
}
