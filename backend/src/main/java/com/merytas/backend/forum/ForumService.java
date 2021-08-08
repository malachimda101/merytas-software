package com.merytas.backend.forum;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ForumService {

    @Autowired
    private final ForumRepository repository;

    @Autowired
    public ForumService(ForumRepository repository) {
        this.repository = repository;
    }

    public Forum create (Forum forum) {
        Forum newForum = new Forum (
                UUID.randomUUID(),
                forum.getName(),
                forum.getNumberOfPosts(),
                forum.getTotalLikes(),
                forum.getTotalComments(),
                forum.getFollowers()
        );
        return repository.save(newForum);
    }

    public List<Forum> findALl() {
        List<Forum> list = new ArrayList<>();
        Iterable<Forum> forums = repository.findAll();
        forums.forEach(list::add);
        return list;
    }

    public List<Forum> findAndSortByLikes() {
        List<Forum> list = new ArrayList<>();
        Sort sortOrder = Sort.by("totalLikes");
        Iterable<Forum> forums = repository.findAll(sortOrder.descending());
        forums.forEach(list::add);
        return list;
    }

    public Optional<Forum> find (UUID id) {
        return repository.findById(id);
    }
}
