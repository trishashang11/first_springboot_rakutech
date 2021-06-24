package com.rakutech.demo;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Register {
    @RequestMapping("/register")
    public String getRegisterpage(){
        return "register";
    }
}
