package com.merytas.backend.forum;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class ForumController {

    private final ForumService service;

    @Autowired
    public ForumController(ForumService service) {
        this.service = service;
    }

    @GetMapping("/forums")
    public ResponseEntity<List<Forum>> getAllForums() {
        List<Forum> forums = service.findALl();
        return ResponseEntity.ok().body((forums));
    }

    @GetMapping("/forums/{id}")
    public ResponseEntity<Forum> getForumById(@PathVariable UUID id) {
        Optional<Forum> forum = service.find(id);
        return ResponseEntity.of(forum);
    }

    @GetMapping("forums/top10")
    public ResponseEntity<List<Forum>> getForumsByLikes() {
        List<Forum> forums = service.findAndSortByLikes();
        return ResponseEntity.ok().body((forums));
    }

    @PostMapping("/forums")
    public ResponseEntity<Forum> createForum (@RequestBody Forum forum) {
        Forum created = service.create(forum);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

}
