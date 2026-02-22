# Database Notes: Update Blog Details

This project stores blogs/articles in the `resources` table.

## Table used

- `resources`
- Key columns:
  - `id` (UUID, primary key)
  - `title`
  - `description`
  - `category` (`SOFTWARE_DEVELOPMENT` or `ARTIFICIAL_INTELLIGENCE`)
  - `type` (commonly `EXTERNAL`)
  - `link`
  - `created_at`

## 1) Find the blog you want to update

```sql
SELECT id, title, category, type, link, created_at
FROM resources
ORDER BY created_at DESC;
```

## 2) Update blog details directly in DB (SQL)

Sample:

```sql
UPDATE resources
SET
  title = 'Build Your Own Web Server (Updated)',
  description = 'Step-by-step challenge to design and implement a basic HTTP web server.',
  category = 'SOFTWARE_DEVELOPMENT',
  type = 'EXTERNAL',
  link = 'https://codingchallenges.fyi/challenges/challenge-webserver'
WHERE id = 'PUT-RESOURCE-UUID-HERE';
```

## 3) Update blog details via backend API

Endpoint:
- `PUT /api/resources/{id}`

Sample:

```bash
curl -X PUT http://localhost:8080/api/resources/PUT-RESOURCE-UUID-HERE \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Build Your Own Web Server (Updated)",
    "description": "Step-by-step challenge to design and implement a basic HTTP web server.",
    "category": "SOFTWARE_DEVELOPMENT",
    "type": "EXTERNAL",
    "link": "https://codingchallenges.fyi/challenges/challenge-webserver"
  }'
```

## 4) Verify update

```sql
SELECT id, title, description, category, type, link
FROM resources
WHERE id = 'PUT-RESOURCE-UUID-HERE';
```

Or:

```bash
curl http://localhost:8080/api/resources
```

## Validation rules to follow

- `title`: required, max 255 chars
- `description`: required, max 2000 chars
- `category`: required, only:
  - `SOFTWARE_DEVELOPMENT`
  - `ARTIFICIAL_INTELLIGENCE`
- `type`: required, max 80 chars
- `link`: required, max 1024 chars
