package com.merytas.backend.forum;

import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.UUID;

public interface ForumRepository extends PagingAndSortingRepository<Forum, UUID> {
}
