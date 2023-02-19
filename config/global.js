const config = {
  database: {
    type: "postgres",
    user: "postgres",
    database: "youthbit", // database name
    password: "password",
    port: "5432",
    host: "localhost",
  },
  telegram: {
    bot: {
      token: '5969288783:AAGsRdbhsqrgBkfv6GwAezpva1OJq3AnjcY',
    },
    webapp: {
      host: "94.41.17.5", // адрес итд с прода
      port: "8443"
    }
  },
  frontend: {
    port: 8443
  }
}

export default config;
