import express from "express";
import { helloWorld } from "./routers";

const app = express();

app.get("/", helloWorld);

app.listen(3000);
