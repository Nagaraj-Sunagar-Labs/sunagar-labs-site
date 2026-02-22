# Sunagar Labs Portfolio

Full-stack personal portfolio built with Next.js, Spring Boot, and PostgreSQL (Supabase-compatible schema).

## Structure

- `frontend/` Next.js App Router + Tailwind CSS UI
- `backend/` Spring Boot REST API
- `database/schema.sql` PostgreSQL schema for contacts/resources
- `docker-compose.yml` one-command local startup

## Run locally (without Docker)

1. Start PostgreSQL (or Supabase) and apply `database/schema.sql`.
2. Backend:
```bash
cd backend
mvn spring-boot:run
```
3. Frontend:
```bash
cd frontend
npm install
npm run dev
```

## Run with Docker Compose

Use Supabase/external DB (default):
```bash
docker compose up --build frontend backend
```

Use bundled local PostgreSQL:
```bash
docker compose --profile local-db up --build
```

## API endpoints

- `POST /api/contacts`
- `GET /api/resources`
- `GET /api/resources/{id}`
- `POST /api/resources`
- `PUT /api/resources/{id}`
- `DELETE /api/resources/{id}`

## Resources: Add Your Own Blog/Article

The `/resources` page reads data from the `resources` table through `GET /api/resources`.

### 1) Write your blog/resource details

Prepare these fields:

- `title` (max 255 chars)
- `description` (max 2000 chars)
- `category` (`SOFTWARE_DEVELOPMENT` or `ARTIFICIAL_INTELLIGENCE`)
- `type` (`EXTERNAL` recommended with current UI)
- `link` (max 1024 chars, full URL)

Note:
- `INTERNAL` type is reserved for internal detail pages, but this project does not yet include `/resources/[id]`.
- Use `EXTERNAL` so cards open the resource directly.

### 2) Store in DB directly (SQL)

```sql
INSERT INTO resources (title, description, category, type, link)
VALUES (
  'My New Blog',
  'Short summary of what the blog covers.',
  'SOFTWARE_DEVELOPMENT',
  'EXTERNAL',
  'https://example.com/my-new-blog'
);
```

### 3) Store via backend API (recommended for app-level validation)

```bash
curl -X POST http://localhost:8080/api/resources \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My New Blog",
    "description": "Short summary of what the blog covers.",
    "category": "SOFTWARE_DEVELOPMENT",
    "type": "EXTERNAL",
    "link": "https://example.com/my-new-blog"
  }'
```

### 4) Verify

```bash
curl http://localhost:8080/api/resources
```

Then open `http://localhost:3000/resources` to see it in the UI.
