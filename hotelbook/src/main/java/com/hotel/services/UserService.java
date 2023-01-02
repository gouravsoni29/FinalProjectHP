package com.hotel.services;



import java.util.Set;



import com.hotel.model.User;
import com.hotel.model.UserRole;

public interface UserService {

	
    //creating user
    public User createUser(User user, Set<UserRole> userRoles) throws Exception;

    //get user by username
    public User getUser(String username);

    //delete user by id
    public void deleteUser(Long userId);
    
    public User fetchUserByUserName(String username);
    
    public void sendEmail(User user) throws Exception;
    
    
  
}
