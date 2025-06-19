package Exercise_2;

public class WordDocumentFactory   extends DocumentFactory{
	public Document createDocument() {
        return new WordDocument();
    }
}
