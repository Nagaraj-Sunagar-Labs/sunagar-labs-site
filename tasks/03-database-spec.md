# Database Specification – Supabase

## Database

PostgreSQL (Managed by Supabase)

---

## Tables

### 1. contacts

| Column     | Type      | Description     |
| ---------- | --------- | --------------- |
| id         | UUID      | Primary key     |
| name       | TEXT      | Sender name     |
| email      | TEXT      | Sender email    |
| message    | TEXT      | Message content |
| created_at | TIMESTAMP | Auto-generated  |

---

### 2. resources

| Column      | Type      | Description               |
| ----------- | --------- | ------------------------- |
| id          | UUID      | Primary key               |
| title       | TEXT      | Article title             |
| description | TEXT      | Short summary             |
| category    | TEXT      | SOFTWARE_DEVELOPMENT / AI |
| link        | TEXT      | URL or internal slug      |
| created_at  | TIMESTAMP | Auto-generated            |

---

## Constraints

- Email must be valid
- Category must be enum-like
