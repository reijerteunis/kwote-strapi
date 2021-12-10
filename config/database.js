// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "bookshelf",
//       settings: {
//         client: "postgres",
//         host: env("DATABASE_HOST", "localhost"),
//         port: env.int("DATABASE_PORT", 5432),
//         database: env("DATABASE_NAME", "kwote"),
//         username: env("DATABASE_USERNAME", "roula"),
//         password: env("DATABASE_PASSWORD", "password"),
//         schema: env("DATABASE_SCHEMA", "public"),
//       },
//       options: {},
//     },
//   },
// });


module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'kwote'),
      user: env('DATABASE_USERNAME', 'roula'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: env('DATABASE_SSL', false)
    },
    debug: false,
  },
});