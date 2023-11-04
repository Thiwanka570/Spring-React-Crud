package com.crudaplication.spring_backend.repo;

import com.crudaplication.spring_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Long> {
}
