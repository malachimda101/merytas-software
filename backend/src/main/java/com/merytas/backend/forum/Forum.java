package com.merytas.backend.forum;

import lombok.Data;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Data
@Table(name="forums")
public class Forum {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String name;
    private int numberOfPosts;
    private int totalLikes;
    private int totalComments;
    private int followers;

    public Forum() {
    }

    public Forum(UUID id, String name, int numberOfPosts, int totalLikes, int totalComments, int followers) {
        this.id = id;
        this.name = name;
        this.numberOfPosts = numberOfPosts;
        this.totalLikes = totalLikes;
        this.totalComments = totalComments;
        this.followers = followers;
    }

}
