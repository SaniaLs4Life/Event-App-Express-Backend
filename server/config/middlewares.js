import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

export default app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan("dev"));
  app.use(cors());
};
