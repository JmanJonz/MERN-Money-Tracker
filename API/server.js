import express from "express";

const expressServer = express();
const port = 3000;

expressServer.get("/", (req, res) => {
    res.send("Hello from live express server");
})

expressServer.listen(port, () => {
    console.log("Server Listening on port 3000")
});

