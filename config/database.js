module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'lpr-cms'),
        username: env('DATABASE_USERNAME', 'tridang'),
        password: env('DATABASE_PASSWORD', ''),
        ssl: process.env.NODE_ENV === 'production' && {
          rejectUnauthorized: false
        },
      },
      options: {
        pool: {
          min: 0,
          max: 6
        },
      }
    },
  },
});
