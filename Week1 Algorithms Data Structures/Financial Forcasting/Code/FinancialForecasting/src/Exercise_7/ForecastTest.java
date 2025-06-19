package Exercise_7;

public class ForecastTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		double initialAmount = 1000.0;  
        double growthRate = 0.10;       
        int years = 5;

        double futureValue = FinancialForecast.calculateFutureValue(initialAmount, growthRate, years);
        System.out.printf("Future Value after %d years: ₹%.2f\n", years, futureValue);


	}

}
