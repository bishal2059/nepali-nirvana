const config = {
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  EMAIL_VERIFY_SECRET: process.env.EMAIL_VERIFY_SECRET,
  HOST_ID: process.env.HOST_ID,
  HOST_PASS: process.env.HOST_PASS,
};

module.exports = config;
