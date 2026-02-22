CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    -- CONSTRAINT contacts_email_format_chk CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

CREATE TABLE IF NOT EXISTS resources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    type TEXT NOT NULL,
    link TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        -- CONSTRAINT resources_category_chk CHECK (category IN ('SOFTWARE_DEVELOPMENT', 'ARTIFICIAL_INTELLIGENCE'))
);

INSERT INTO resources (title, description, category, type, link)
SELECT
    'Build Your Own Web Server',
    'Hands-on systems design challenge for implementing an HTTP web server from scratch.',
    'SOFTWARE_DEVELOPMENT',
    'EXTERNAL',
    'https://codingchallenges.fyi/challenges/challenge-webserver'
WHERE NOT EXISTS (
    SELECT 1
    FROM resources
    WHERE link = 'https://codingchallenges.fyi/challenges/challenge-webserver'
);
