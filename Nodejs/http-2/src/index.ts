import http from "node:http";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Welcome</h1>");
    } else if (req.url === "/about" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About</h1>");
    } else if (req.url === "/location" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Location</h1>");
    } else if (req.url === "/services" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Services</h1>");
    } else if (req.url === "/contact" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Contact</h1>");
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Archivo no encontrado</h1>");
    }
});

server.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});
