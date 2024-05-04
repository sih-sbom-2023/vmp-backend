import express from "express"
import { env } from "./config/env.config";

const app = express();



app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
})