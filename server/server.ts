import express, { Express } from "express"
import * as dotenv from "dotenv";
import { userRouter, postRouter } from "./src/routers";

import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 8080;
const app: Express = express();

app.use(express.json())

const main = async () => {
  //adding cors to the express app
  app.use(cors())
  //add userRouter to the express App
  app.use("/api/user", userRouter);
  app.use("/api/post", postRouter);
  //Starting an Express Server
  app.listen(PORT, () => {
    console.log(`Server is running at 'http://localhost:${PORT}'`)
  })
}

main()
