# Dogregister

A full-stack prototype application for registering and browsing dogs.  
This is a vast extension of a school project called "Hundregistret", meant to showcase experience in multiple environments while being a scalable, practical application.  
Built with **Spring Boot (Java 17)** on the backend and **Angular (standalone, SSR enabled)** on the frontend.

---

### Features so far
- REST API (`/api/dogs`) with endpoints to:
  - List all registered dogs
  - Create new dogs
  - Get dog by ID
  - Delete dog by ID
- Angular frontend with:
  - Home page `/home` showing a styled, responsive table of registered dogs
  - Service layer (`DogService`) consuming the API with `HttpClient`
  - Model definitions (`Dog`, `CreateDog`)
- Responsive SCSS styling with semantic HTML

---

### Tech Stack

**Backend**
- Java 17 + Spring Boot 3.5
- Flyway for DB migrations
- PostgreSQL 17 locally (H2 reserved for tests)
- Maven build pipeline

**Frontend**
- Angular 17 (standalone components, SSR enabled)
- SCSS for styling
- RxJS Observables for API calls

**CI/CD**
- Azure DevOps pipeline
  - Separate backend (Maven) + frontend (Angular) jobs
  - Caching for Maven + npm
  - Build artifacts published for both

---

### Getting Started

#### Backend (API)
```bash
cd api
./mvnw spring-boot:run
# runs at http://localhost:8080
```

#### Frontend (UI)
```bash
cd dogregister-ui
npm install
ng serve
# runs at http://localhost:4200
```