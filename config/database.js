module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        database: env('DATABASE_NAME', 'blog_strapi'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'abc123'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
