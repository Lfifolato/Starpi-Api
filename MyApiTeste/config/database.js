module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'mysql.apiserver.lfsystem.com.br'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'apiserver'),
        username: env('DATABASE_USERNAME', 'apiserver'),
        password: env('DATABASE_PASSWORD', 'Dalri1010'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
