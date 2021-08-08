package com.merytas.backend.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Service
public class UserService {
    private final CrudRepository<User, UUID> repository;

    @Autowired
    public UserService(CrudRepository<User, UUID> repository) {
        this.repository = repository;
    }

    public User create (User user) {
        User newUser = new User(
                UUID.randomUUID(),
                user.getUserName(),
                user.getFirstName(),
                user.getLastName(),
                user.getImgUrl()
        );
        return repository.save(newUser);
    }

    public List<User> findAll () {
        List<User> list = new ArrayList<>();
        Iterable<User> users = repository.findAll();
        users.forEach((list::add));
        return list;
    }


    public Optional<User> find (UUID id) {
        return repository.findById(id);
    }


}
