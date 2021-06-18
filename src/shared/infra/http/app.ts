import cors from "cors";
import express from "express";

import { routes } from "./routes/routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log("Server started at port 3333");
});
