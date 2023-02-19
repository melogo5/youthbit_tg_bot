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
      // url: "https://94.41.17.5:8443", // адрес итд с прода
      url: "https://08cb-94-41-17-5.ngrok.io"
    }
  },
  frontend: {
    port: 8080
  }
}

export default config;
