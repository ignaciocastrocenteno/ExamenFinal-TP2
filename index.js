import express from "express";
import TemperatureRouter from "./src/routes/temperature.routes.js";
import config from "./config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", new TemperatureRouter().start());

app.listen(config.PORT, () => {
  console.log(`Server already running in port localhost ${config.PORT}`);
});

app.on("error", (errorDetail) => {
  console.error(
    `An error has ocurred while setting up the web server: ${errorDetail}`
  );
});
