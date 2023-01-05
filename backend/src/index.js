import mongo from "./mongo.js";
import server from "./server.js";
//import path from "path";
//import express from "express";
import serve from "serve";

import "dotenv-defaults/config.js";

mongo.connect();
const port = process.env.PORT | 4000;

if (process.env.NODE_ENV === "production") serve("../frontend/build/index.html", { port: 8010 });

/*
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  console.log(path.join(__dirname, "../frontend", "build" , "index.html"))
  server.use(express.static(path.join(__dirname, "../frontend", "build")));
  server.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
  });
}
*/

server.listen({ port }, () => {
  console.log(`The server is up on port ${port}!`);
});
