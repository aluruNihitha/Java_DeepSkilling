package Exercise_1;

import static org.junit.Assert.*;
import org.junit.Test;

import org.junit.Test;

public class CalculatorTest {

	@Test
	public void test() {
		Calculator calc = new Calculator();
        int result = calc.add(2, 3);
        assertEquals(5, result);  // checks if 2+3 == 5
	}

}
