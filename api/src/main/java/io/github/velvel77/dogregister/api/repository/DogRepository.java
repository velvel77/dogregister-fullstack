package io.github.velvel77.dogregister.api.repository;

import io.github.velvel77.dogregister.api.model.Dog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DogRepository extends JpaRepository<Dog, Long> {
}
