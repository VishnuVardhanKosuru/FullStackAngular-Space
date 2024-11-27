package com.example.signup;

import com.example.signup.entity.Signup;
import com.example.signup.repository.SignupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SignupService {

    @Autowired
    private SignupRepository signupRepository;

    public Signup createSignup(Signup signup) {
        return signupRepository.save(signup);
    }

    public List<Signup> getAllSignups() {
        return signupRepository.findAll();
    }
}
