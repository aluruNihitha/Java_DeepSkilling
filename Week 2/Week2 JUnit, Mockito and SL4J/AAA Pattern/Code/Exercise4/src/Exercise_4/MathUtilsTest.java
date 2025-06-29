package Exercise_4;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;

public class MathUtilsTest {
	private MathUtils mathUtils;

    // 🛠️ Setup: runs BEFORE each test
    @Before
    public void setUp() {
        mathUtils = new MathUtils();
        System.out.println("Setup done!");
    }

    // 🧹 Teardown: runs AFTER each test
    @After
    public void tearDown() {
        System.out.println("Test completed.\n");
    }

    // ✅ Test for addition (using AAA)
    @Test
    public void testAdd() {
        // Arrange
        int a = 5;
        int b = 3;

        // Act
        int result = mathUtils.add(a, b);

        // Assert
        assertEquals(8, result);
    }

    // ✅ Test for multiplication (using AAA)
    @Test
    public void testMultiply() {
        // Arrange
        int a = 4;
        int b = 2;

        // Act
        int result = mathUtils.multiply(a, b);

        // Assert
        assertEquals(8, result);
    }

}
