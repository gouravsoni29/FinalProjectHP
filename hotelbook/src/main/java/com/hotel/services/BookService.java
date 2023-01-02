package com.hotel.services;

import java.util.List;

import com.hotel.dataclass.BookingData;
import com.hotel.model.Book;
import com.hotel.model.User;

public interface BookService {
	
	Book findByBookingId(Long id);
	
	public Book saveBook(BookingData bd);
	
	public Book getBooking(String username);
	
	 public void sendEmail(User user) throws Exception;
	



}
