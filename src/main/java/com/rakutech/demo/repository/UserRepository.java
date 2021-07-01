package com.rakutech.demo.repository;

import com.rakutech.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.Embeddable;
import javax.persistence.Table;

@Embeddable
@Table(name="user")
public interface UserRepository extends JpaRepository<User, Long> {
    @Query(value = "SELECT * FROM user WHERE email = ?1 AND password = ?2", nativeQuery = true)
    User authenticate(String email, String password);
}
