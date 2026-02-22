# Backend Specification – Sunagar Labs

## Technology Stack

- Java 17+
- Spring Boot
- Spring Web
- Spring Data JPA
- Validation (Hibernate Validator)
- Lombok

---

## Responsibilities

- Persist contact form submissions
- Manage blog/resource data
- Expose REST APIs for frontend

---

## Core Modules

### 1. Contact Module

- Accept contact requests
- Persist data in database
- No email sending (future scope)

### 2. Resource Module

- CRUD operations for blog/articles
- Categorized as:
  - SOFTWARE_DEVELOPMENT
  - ARTIFICIAL_INTELLIGENCE

---

## Architecture Pattern

- Controller → Service → Repository
- DTO-based request/response
- Global exception handling
- Clear separation of concerns

---

## Non-Functional Requirements

- Clean REST APIs
- Proper HTTP status codes
- Input validation
- Logging (INFO & ERROR)
