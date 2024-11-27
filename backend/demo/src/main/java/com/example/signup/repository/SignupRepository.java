package com.example.signup.repository;
import com.example.signup.entity.Signup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SignupRepository extends JpaRepository<Signup, Long> {
}
