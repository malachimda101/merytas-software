package com.merytas.backend.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class UserController {

    private final UserService service;

    public UserController(UserService service ){
        this.service = service;
    }

    @Autowired
    UserReposity userReposity;

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") UUID id) {
        Optional<User> userData = service.find(id);
        System.out.println("GET Request Successful");
        return ResponseEntity.of(userData);
    }

    @PostMapping("/users")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User created = service.create(user);
        System.out.println("POST Request Successful");
        return new ResponseEntity<>(created, HttpStatus.CREATED);

    }


//    @PostMapping(path="/users")
//    public @ResponseBody String addNewUser (@RequestParam String name
//            , @RequestParam String email) {
//        // @ResponseBody means the returned String is the response, not a view name
//        // @RequestParam means it is a parameter from the GET or POST request
//
//        User n = new User();
//        n.setName(name);
//        n.setEmail(email);
//        userRepository.save(n);
//        return "Saved";
//    }
}
