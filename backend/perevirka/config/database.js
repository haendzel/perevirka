const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "perevirka_db"),
      user: env("DATABASE_USERNAME", "nerdka"),
      password: env("DATABASE_PASSWORD", "P3r3v1rk@"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
    debug: false,
  },
});
