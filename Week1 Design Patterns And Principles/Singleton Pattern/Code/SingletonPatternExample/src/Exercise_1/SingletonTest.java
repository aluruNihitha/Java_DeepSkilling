package Exercise_1;

public class SingletonTest {

	public static void main(String[] args) {
		Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        
        System.out.println("Is logger1 the same as logger2? " + (logger1 == logger2));

        
        logger1.log("Hello from logger1!");
        logger2.log("Hello from logger2!");


	}

}
