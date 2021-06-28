package com.rakutech.demo.controllers;


import com.rakutech.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UserController {

    @Autowired
    private UserRepository UserRepo;

    @RequestMapping("/register")
    public String register(){

        return "register";
    }

    @RequestMapping("/login")
    public String login(){

        return  "login";
    }
}
