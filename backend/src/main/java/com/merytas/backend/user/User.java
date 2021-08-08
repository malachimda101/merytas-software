package com.merytas.backend.user;

import lombok.Data;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Data
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String userName;

    private String firstName;

    private String lastName;

    private String imgUrl;


    public User(UUID id, String userName, String firstName, String lastName, String imgUrl) {
        this.id = id;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.imgUrl = imgUrl;
    }

    public User() {
    }
}
