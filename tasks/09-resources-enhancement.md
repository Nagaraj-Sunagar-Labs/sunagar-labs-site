# Feature Enhancement: Dynamic Resources Page

## Objective

Transform the Resources section from a static hardcoded component
into a fully dynamic, database-driven feature.

Additionally:

- Remove Resources from the main landing page
- Create a dedicated `/resources` page
- Fetch resource data from backend APIs
- Provide structured layout with proper categorization
- Support both internal blog links and external articles

---

# Current Database Schema (Confirmed Correct)

Table: resources

Columns:

- id (uuid, primary key)
- title (varchar, not null)
- description (text, not null)
- category (varchar, not null)
- type (varchar, not null)
- link (varchar, not null)
- created_at (timestamp with timezone, auto)

---

# Expected Categories

- SOFTWARE_DEVELOPMENT
- ARTIFICIAL_INTELLIGENCE

---

# Expected Types

- INTERNAL → Blog hosted within Sunagar Labs
- EXTERNAL → External article link

---

# High-Level Architecture Changes

Frontend:

- Remove Resources section from main page
- Add dedicated route `/resources`
- Fetch data from backend dynamically
- Add category-based filtering UI

Backend:

- Ensure GET /api/resources supports:
  - Fetch all resources
  - Filter by category (optional query param)
  - Sort by created_at (descending default)

---

# Frontend Requirements (Next.js)

## 1. Routing

Create new page:

- /resources

Header navigation update:

- Add "Resources" link pointing to /resources
- Remove resources section from homepage

---

## 2. Data Fetching

Use:

- Server Components OR
- Client-side fetch with useEffect

Call:
GET /api/resources

Optional:
GET /api/resources?category=SOFTWARE_DEVELOPMENT

---

## 3. Page Layout

The /resources page must contain:

### 1. Page Header

- Title: "Resources"
- Subtitle: "Thoughts and curated readings on Software Development and AI"

---

### 2. Category Filter Section

UI:

- Tabs OR Toggle Buttons
  - All
  - Software Development
  - Artificial Intelligence

Behavior:

- Clicking filter refetches or filters client-side
- Active tab styled clearly

---

### 3. Resource Card Layout

Each resource must display:

- Title (clickable)
- Short description
- Category badge
- Type badge (INTERNAL / EXTERNAL)
- Published date (formatted)
- External link icon (if type == EXTERNAL)

Behavior:

- If type == EXTERNAL:
  - Open link in new tab
- If type == INTERNAL:
  - Route to /resources/[id] or /blog/[id]

---

## 4. Resource Detail Page (If INTERNAL)

Create dynamic route:

- /resources/[id]

Behavior:

- Fetch resource by ID
- Render full content
- Show metadata:
  - Title
  - Category
  - Created date
- Back to resources button

Note:
For now, description can act as content.
Later enhancement may include markdown support.

---

# Backend Requirements (Spring Boot)

## 1. Ensure APIs Support:

### GET /api/resources

Returns:

- All resources sorted by created_at DESC

### GET /api/resources?category=SOFTWARE_DEVELOPMENT

### GET /api/resources/{id}

---

## 2. Service Layer Enhancements

- Add sorting by created_at DESC
- Add optional category filtering
- Validate category values

---

## 3. Response DTO Example

{
"id": "uuid",
"title": "Understanding JVM Internals",
"description": "Deep dive...",
"category": "SOFTWARE_DEVELOPMENT",
"type": "EXTERNAL",
"link": "https://example.com",
"createdAt": "2026-02-22T10:00:00Z"
}

---

# UI/UX Guidelines

- Maintain black & white theme
- Use whitespace generously
- Minimal borders (Wikipedia-inspired)
- Clear typography hierarchy

Resource cards:

- Simple rectangular card
- Light border
- Subtle hover effect

---

# Performance Requirements

- Resources page must load under 2 seconds
- Lazy load detail pages
- No blocking UI during fetch

---

# Error Handling

Frontend:

- Show loading skeleton
- Show friendly error message if API fails

Backend:

- Proper HTTP status codes
- 404 if resource not found

---

# Acceptance Criteria

- Resources no longer appear on main page
- /resources page exists and is functional
- Data loads from backend (not hardcoded)
- Category filtering works
- Internal & external routing works correctly
- Clean and consistent UI

---

# Future Improvements (Not in Scope Now)

- Markdown rendering support
- Pagination
- Search functionality
- Admin CRUD dashboard
- SEO metadata per resource
