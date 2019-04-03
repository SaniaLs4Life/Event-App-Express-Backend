import express from "express";
import dbConfig from "./config/db";
import middlewaresConfig from "./config/middlewares";
import { MeetupRoutes, GroupRoutes } from "./modules";

const app = express();

//Database Config
dbConfig();

//Middlewares
middlewaresConfig(app);

app.use('/api', [MeetupRoutes, GroupRoutes]);

const PORT = process.env.PORT || 9090;

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App is listening on PORT ${PORT}`);
  }
});
