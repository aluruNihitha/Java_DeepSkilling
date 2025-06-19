package Exercise_7;

public class FinancialForecast {
	 public static double calculateFutureValue(double amount, double rate, int years) {
	        if (years == 0) {
	            return amount;  // base case: 0 years left
	        } else {
	            return calculateFutureValue(amount * (1 + rate), rate, years - 1); // recursive call
	        }
	    }

}
