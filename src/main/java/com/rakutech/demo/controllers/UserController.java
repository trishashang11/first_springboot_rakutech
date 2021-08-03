package com.rakutech.demo.controllers;


//import java.net.URI;
import com.rakutech.demo.model.AuthenticationResponse;
import com.rakutech.demo.model.User;
import com.rakutech.demo.repository.UserRepository;
import com.rakutech.demo.service.MyUserDetailsService;
import com.rakutech.demo.util.JwtUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@CrossOrigin(origins="*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private MyUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtTokenUtil;

    private final Logger log = LoggerFactory.getLogger(UserController.class);
    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    Collection<User> users() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    ResponseEntity<?> getUser(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/user")
    ResponseEntity<User> createUser(@RequestBody User user) throws URISyntaxException {
        log.info("Request to create user: {}", user);
        User result = userRepository.save(user);
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody User user) throws Exception {
        User result = userRepository.authenticate(user.getEmail(), user.getPassword());
        if (result != null) {
            final String jwt = jwtTokenUtil.generateToken(result);
            return ResponseEntity.ok().body(new AuthenticationResponse(jwt));
        }
        return ResponseEntity.badRequest().body(null);
    }

    @PostMapping("/auth")
    ResponseEntity<User> auth(@RequestBody User user) throws URISyntaxException {
        log.info("Request auth: {}", user);
        User result = userRepository.authenticate(user.getEmail(), user.getPassword());
        return ResponseEntity.ok().body(result);
    }

    @PutMapping("/user")
    ResponseEntity<User> updateGroup(@RequestBody User user) {
        log.info("Request to update user: {}", user);
        User result = userRepository.save(user);
        return  ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        log.info("Request to delete customer: {}", id);
        userRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
