require("dotenv").config();

module.exports = {
  server: {
    port: process.env.PORT || 5000,
    nodeEnv: process.env.NODE_ENV || "development",
  },

  database: {
    uri:
      process.env.MONGODB_URI ||
      "mongodb://localhost:27017/webcraft_db",
  },

  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  },

  client: {
    url: process.env.CLIENT_URL || "http://localhost:3000",
  },

  upload: {
    maxFileSize:
      Number(process.env.MAX_FILE_SIZE) || 5242880,
    directory: process.env.UPLOAD_DIR || "uploads",
  },

  email: {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },

  admin: {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
  },
};