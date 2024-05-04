import path from "path";
import dotenv from "dotenv";
import { envsafe, port, str } from "envsafe";
dotenv.config({ path: path.join(__dirname, "..", "..", ".env") });

export const env = envsafe({
  PORT: port({
    devDefault: 8080,
    desc: "The port the app is running on",
    example: 80,
  }),

  // Drizzle config
  DB_HOST: str(),
  DB_PORT: port(),
  DB_USER: str(),
  DB_PASSWORD: str(),
  DB_DATABASE: str(),
})