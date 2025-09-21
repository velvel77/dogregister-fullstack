package io.github.velvel77.dogregister.api.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class Dog {

    private static final double DACHSHUND_TAIL_LENGTH = 3.70;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String breed;
    private int age;
    private int weight;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private double tailLength;

    //TODO: implement owner
    //private Owner ownerForDog

    public Dog() {}

    public Dog(String name, String breed, int age, int weight) {
        this.name = name.toUpperCase();
        this.breed = breed.toUpperCase();
        this.weight = weight;
        this.age = age;
        setTailLength();
    }

    //TODO implement setOwner

    //TODO implement getOwner()

    //Getters

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() {
        return name;
    }

    public String getBreed() {
        return breed;
    }

    public int getAge() {
        return age;
    }

    public int increaseAge(int newAge) {
        if (newAge > 0) {
            if (age != Integer.MAX_VALUE) {
                age += newAge;
                setTailLength();
            }
            return age;
        }
        return 0;
    }

    public int getWeight() {
        return weight;
    }

    //hjälpmetod för increaseAge(): bestämmer svanslängden
    private void setTailLength() {
        if (breed.equalsIgnoreCase("Tax") || breed.equalsIgnoreCase("Dachshund")) {
            tailLength = DACHSHUND_TAIL_LENGTH;
        } else {
            tailLength = getAge() * (weight / 10.00);
        }
    }

    @PostLoad
    @PostPersist
    @PostUpdate
    private void updateTailLengthAfterLoadOrSave() {
        setTailLength();
    }

    public double getTailLength() {
        return tailLength;
    }

//    public String toString() {
//        String ownerNotNull = (ownerForDog != null) ? ownerForDog.getName() : "None";
//        return "%s %s %d %d %2f %s".formatted(name, breed.toUpperCase(), getAge(), weight, getTailLength(),
//                ownerNotNull);
//    }


}
