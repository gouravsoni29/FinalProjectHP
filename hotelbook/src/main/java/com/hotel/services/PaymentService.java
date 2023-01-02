package com.hotel.services;

import com.hotel.dataclass.BookingData;
import com.hotel.model.Payment;

public interface PaymentService {
	
	public Payment savePayment(BookingData bd);

}
