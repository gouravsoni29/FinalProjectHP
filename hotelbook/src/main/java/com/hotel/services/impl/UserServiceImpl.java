package com.hotel.services.impl;


import java.io.UnsupportedEncodingException;
import java.util.Set;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.hotel.exception.UserFoundException;
import com.hotel.model.User;
import com.hotel.model.UserRole;
import com.hotel.repo.RoleRepository;
import com.hotel.repo.UserRepository;
import com.hotel.services.UserService;

@Service
public class UserServiceImpl implements UserService {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;
    
    @Autowired
    private JavaMailSender javaMailSender;
    
   
    @Lazy
   @Autowired
   private UserService userService;

    //creating user
    @Override
    public User createUser(User user, Set<UserRole> userRoles) throws Exception,UnsupportedEncodingException, MessagingException {


        User local = this.userRepository.findByUsername(user.getUsername());
        if (local != null) {
            System.out.println("User is already there !!");
            throw new UserFoundException();
        } else {
            //user create
            for (UserRole ur : userRoles) {
                roleRepository.save(ur.getRole());
            }

            user.getUserRoles().addAll(userRoles);
            local = this.userRepository.save(user);
            sendEmail(user);

        }

        return local;
    }

    //getting user by username
    @Override
    public User getUser(String username) {
        return this.userRepository.findByUsername(username);
    }

    @Override
    public void deleteUser(Long userId) {
        this.userRepository.deleteById(userId);
    }

	@Override
	public User fetchUserByUserName(String username) {
		// TODO Auto-generated method stub
		return userRepository.findByUsername(username);
	}

	@Override
	public void sendEmail(User user) throws MessagingException, UnsupportedEncodingException {
		// TODO Auto-generated method stub
		String to=user.getEmail();
		String from = "gourav8296@gmail.com";
		String senderName="Gourav";
		String subject="Registration Success";
		String content="<b>Dear [[name]]</b>,<br>"
				+"<h3>Thank you for registration</h3><br>"
				+"<h3>Please Note your details<h3><br>"
				+"<b>Name</b> : [[f]] [[l]] <br>"
				+ "<b>Email : [[e]]<br>"
				+"Thank You <br>"
				+"<h4>Plan4Holiday</h4>";
		
		MimeMessage message =javaMailSender.createMimeMessage();
		 MimeMessageHelper helper = new MimeMessageHelper(message);
	     
		    helper.setFrom(from, senderName);
		    helper.setTo(to);
		    helper.setSubject(subject);
		content =content.replace("[[name]]",user.getUsername());
		content=content.replace("[[f]]", user.getFirstName());
		content=content.replace("[[l]]", user.getLastName());
		content=content.replace("[[e]]", user.getEmail());
		 helper.setText(content, true);
		javaMailSender.send(message);
		
		
	}








//	@Override
//	public List<Book> cancelBooking(Long booking_id) {
//		// TODO Auto-generated method stub
//		Book b1=bookingRepo.findByBookingId(booking_id);
//		b1.setStatus(0);
//		return bookingRepo.findBookingHistory(b1.getUser().getId());
//	}

	
    
    


}
