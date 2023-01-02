package com.hotel.services.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.hotel.dataclass.BookingData;
import com.hotel.model.Payment;
import com.hotel.repo.BookingRepo;
import com.hotel.repo.PaymentRepo;
import com.hotel.services.PaymentService;

public class PaymentServiceImpl implements PaymentService {
	@Autowired
	private PaymentRepo paymentRepo;
	
	@Autowired
	private BookingRepo bookingRepo;

	@Override
	public Payment savePayment(BookingData bd) {
		// TODO Auto-generated method stub
		Payment p1=new Payment();
		p1.setPaymentDate(bd.getPaymentDate());
		p1.setUsername(bd.getUsername());
		return paymentRepo.save(p1);
	}

}
