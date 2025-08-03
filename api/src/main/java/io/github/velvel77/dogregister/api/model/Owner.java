package io.github.velvel77.dogregister.api.model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

public class Owner{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String phoneNumber;
}
