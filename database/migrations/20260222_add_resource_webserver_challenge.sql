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
