package com.merytas.backend.user;

import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface UserReposity extends CrudRepository<User, UUID> {
}
