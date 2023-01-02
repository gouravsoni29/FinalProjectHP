package com.hotel.controller;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.exception.UserFoundException;
import com.hotel.model.Contact;
import com.hotel.model.Role;
import com.hotel.model.User;
import com.hotel.model.UserRole;
import com.hotel.repo.BookingRepo;
import com.hotel.repo.ContactRepo;
import com.hotel.repo.UserRepository;
import com.hotel.services.UserService;
import com.hotel.services.impl.UserDetailsServiceImpl;
import com.hotel.services.impl.UserServiceImpl;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="http://localhost:4200")
public class UserController {

    @Autowired
    private UserService userService;
    
    @Autowired
    private UserDetailsServiceImpl userDetailsServiceImpl;
    @Autowired
    private UserServiceImpl userServiceImpl;
    
    @Autowired
    private BookingRepo bookingRepo;
    
    @Autowired
    private ContactRepo contactRepo;
    
    @Autowired
    private UserRepository userRepository;
    

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    //creating user
    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {


        user.setProfile("default.png");
        //encoding password with bcryptpasswordencoder

        user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));

        Set<UserRole> roles = new HashSet<>();

        Role role = new Role();
        role.setRoleId(45L);
        role.setRoleName("NORMAL");

        UserRole userRole = new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);

        roles.add(userRole);


        return this.userService.createUser(user, roles);

    }
    
    @GetMapping("/all")
   public List<User> getAll(){
    	return userRepository.findAll();
    }

    @GetMapping("/{username}")
    public User getUser(@PathVariable("username") String username) {
        return this.userService.getUser(username);
    }
    
//    @GetMapping("/{id}")
//    public User getUser(@PathVariable("username") Long id ){
//        return this.userService.getUser(id);
//    }
    
//    @GetMapping("/users/{id}")
//    public User getUserById(@PathVariable Long id) {
//    	User user=userRepository.getById(id);
//    	return user;
//    }
    
   

    //delete the user by id
    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable("userId") Long userId) {
        this.userService.deleteUser(userId);
    }


    //update api


    @ExceptionHandler(UserFoundException.class)
    public ResponseEntity<?> exceptionHandler(UserFoundException ex) {
        return ResponseEntity.ok(ex.getMessage());
    }
    
	@PostMapping("/contactus")
	public Contact saveStudent(@RequestBody Contact contact) throws Exception
	{
		Contact obj=contactRepo.save(contact);
		
		return obj;
	}
	
	@GetMapping("/allfeed")
	public List<Contact> getAllFeed(){
		return contactRepo.findAll();
	}
//	@PutMapping("/{id}")
//	public ResponseEntity<User> updateUser(@PathVariable Long id,@RequestBody User user){
//		@SuppressWarnings("deprecation")
//		User getuser=userRepository.getById(id);	
//		getuser.setEmail(user.getEmail());
//		getuser.setPhone(user.getPhone());
//		getuser.setFirstName(user.getFirstName());
//		getuser.setLastName(user.getLastName());
//		
//		User updateuser=userRepository.save(getuser);
//		return ResponseEntity.ok(updateuser);
//	}
	
	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateemp(@PathVariable Long id,@RequestBody User user){
		User getemp=userRepository.getById(id);
		getemp.setEmail(user.getEmail());
		getemp.setFirstName(user.getFirstName());
		getemp.setLastName(user.getLastName());
		getemp.setPhone(user.getPhone());
		
		User updateemp=userRepository.save(getemp);
		return ResponseEntity.ok().body(updateemp);
	}
	


//	
	
	
    
    
    
    


}
