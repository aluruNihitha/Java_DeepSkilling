package Exercise_2;

public class SearchEngine {
	 // Linear Search
    public static Product linearSearch(Product[] products, String targetName) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(targetName)) {
                return product;
            }
        }
        return null;  // not found
    }

    // Binary Search 
    public static Product binarySearch(Product[] products, String targetName) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int result = targetName.compareToIgnoreCase(products[mid].productName);

            if (result == 0) {
                return products[mid];
            } else if (result < 0) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return null;
    }

}
