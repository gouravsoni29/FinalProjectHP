package com.hotel.services.impl;

import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.hotel.dataclass.BookingData;
import com.hotel.model.Book;
import com.hotel.model.Payment;
import com.hotel.model.User;
import com.hotel.repo.BookingRepo;
import com.hotel.repo.PaymentRepo;
import com.hotel.repo.UserRepository;
import com.hotel.services.BookService;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	private BookingRepo bookingRepo;
	@Autowired
	private PaymentRepo paymentRepo;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private JavaMailSender mailSender;

	@Override
	public Book findByBookingId(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	public Book saveBook(BookingData bd) {
		// TODO Auto-generated method stub

		Book b1 = new Book();
		b1.setCheckinDate(bd.getCheckinDate());
		b1.setCheckoutDate(bd.getCheckoutDate());
		b1.setStatus(1);
		b1.setUsername(bd.getUsername());
		b1.setPerson(bd.getPerson());

		Book b2 = bookingRepo.save(b1);

//		Payment payment =new Payment(bd.getPaymentDate(),bd.getPaymentTime());
//		payment =paymentRepo.save(payment);

		User user = userRepository.findByUsername(bd.getUsername());

		return bookingRepo.save(b2);
	}

	@Override
	public Book getBooking(String username) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void sendEmail(User user) throws MessagingException, UnsupportedEncodingException {
		// TODO Auto-generated method stub
		String to = user.getEmail();
		String from = "gourav8296@gmail.com";
		String senderName = "Plan4Holiday";
		String subject = "Booking Confirmation";
		String content = "<b>Dear [[name]]</b>,<br>" + "<h3>Thank you for booking</h3><br>"
				+ "<h3>Please Note your details<h3><br>" + "<b>Name</b> : [[f]] [[l]] <br>" + "<b>Email : [[e]]<br>"
				+ "Thank You <br>" + "<h4>Plan4Holiday</h4>";

		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);

		helper.setFrom(from, senderName);
		helper.setTo(to);
		helper.setSubject(subject);
		content = content.replace("[[name]]", user.getFirstName());
		content = content.replace("[[f]]", user.getFirstName());
		content = content.replace("[[l]]", user.getLastName());
		content = content.replace("[[e]]", user.getEmail());
		helper.setText(content, true);
		mailSender.send(message);

	}

}
