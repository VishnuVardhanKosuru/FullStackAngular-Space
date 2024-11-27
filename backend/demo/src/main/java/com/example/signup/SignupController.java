package com.example.signup;

import com.example.signup.entity.Signup;
import com.example.signup.repository.SignupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SignupController {

    @Autowired
    private SignupRepository signupRepository;

    @PostMapping("/signup")
    public Signup createSignup(@RequestBody Signup signup) {
        return signupRepository.save(signup);
    }

    @GetMapping("/signup")
    public List<Signup> getAllSignups() {
        return signupRepository.findAll();
    }
}
