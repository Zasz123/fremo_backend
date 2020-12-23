import dotenv from "dotenv";

const foundDotenv = dotenv.config();

if (foundDotenv.error) {
  console.log("dotenv not found");
}

export default {
  port: process.env.PORT || "",

  db: {
    host: process.env.DB_HOST || "",
    port: process.env.DB_PORT || "",
    user: process.env.DB_USER || "",
    pass: process.env.DB_PASS || "",
    db_name: process.env.DB_NAME || "",
  },

  jwtSecret: process.env.JWT_SECRET || "",
};
