// longhand
let dbHost;
if (process.env.DB_HOST) {
    dbHost = process.env.DB_HOST;
} else {
    dbHost = 'localhost';
}

// shorthand
const dbHost = process.env.DB_HOST || 'localhost';
