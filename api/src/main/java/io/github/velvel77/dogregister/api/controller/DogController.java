package io.github.velvel77.dogregister.api.controller;

import io.github.velvel77.dogregister.api.model.Dog;
import io.github.velvel77.dogregister.api.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dogs")
@CrossOrigin(origins = "http://localhost:4200") //permission for angular to access
public class DogController {

    @Autowired
    private DogRepository dogRepository;

    @GetMapping
    public List<Dog> getAllDogs() {
        return dogRepository.findAll();
    }

    @PostMapping
    public Dog createDog(@RequestBody Dog dog) {
        return dogRepository.save(dog);
    }

    //Returns
    @GetMapping("/{id}")
    public ResponseEntity<Dog> getDogById(@PathVariable Long id) {
        return dogRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public void deleteDog(@PathVariable Long id) {
        dogRepository.deleteById(id);
    }
}
