package com.merytas.backend.user;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;


@Service
public class UserService {
    private final CrudRepository<User, UUID> repository;

    public UserService(CrudRepository<User, UUID> repository) {
        this.repository = repository;
    }

    public User create (User user) {
        User newUser = new User (
                UUID.randomUUID(),
                user.getUserName(),
                user.getFirstName(),
                user.getLastName(),
                user.getImgUrl()
        );
        return repository.save(newUser);
    }

    public Optional<User> find (UUID id) {
        return repository.findById(id);
    }


}
