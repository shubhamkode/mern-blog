import express, { Express } from "express"
import * as dotenv from "dotenv";
import userRouter from "./src/routers/userRouter";

dotenv.config();

const PORT = process.env.PORT || 8080;
const app: Express = express();

app.use(express.json())

const main = async () => {
  //add userRouter to the express App
  app.use("/api", userRouter);

  //Starting an Express Server
  app.listen(PORT, () => {
    console.log(`Server is running at 'http://localhost:${PORT}'`)
  })
}

main()
