module.exports = {
    apps : [
        {
          name: "Networth Journal",
          script: "server.js",
          watch: true,
          env: {
              "PORT": 8080,
              "NODE_ENV": "development"
          },
          env_production: {
              "PORT": 80,
              "NODE_ENV": "production",
          }
        }
    ]
  }