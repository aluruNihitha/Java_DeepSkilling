package Exercise_2;

import java.util.Arrays;
import java.util.Comparator;

public class SearchTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Product[] products = {
	            new Product(1, "Shoes", "Footwear"),
	            new Product(2, "Shirt", "Clothing"),
	            new Product(3, "Laptop", "Electronics"),
	            new Product(4, "Bag", "Accessories"),
	            new Product(5, "Phone", "Electronics")
	        };

	        //  Linear Search
	        Product found1 = SearchEngine.linearSearch(products, "Laptop");
	        if (found1 != null)
	            System.out.println("Linear Search Found: " + found1.productName);
	        else
	            System.out.println("Linear Search: Product not found");

	        //  Binary Search needs sorted array
	        Arrays.sort(products, Comparator.comparing(p -> p.productName));

	        Product found2 = SearchEngine.binarySearch(products, "Laptop");
	        if (found2 != null)
	            System.out.println("Binary Search Found: " + found2.productName);
	        else
	            System.out.println("Binary Search: Product not found");

	}

}
