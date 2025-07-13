package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
	private BookRepository bookRepository;

    // Setter (Spring will use this to inject)
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void getBookDetails() {
        bookRepository.fetchBook();
    }

}
