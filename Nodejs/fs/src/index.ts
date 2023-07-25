import * as fs from "fs";
import http from "http";
import path from "path";

const server = http.createServer((req, res) => {
    if (req.url === "/dirname" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<h1>My "__dirname" is: ${__dirname}</h1>`);
    }
    const pathname = req.url === "/" ? "/home" : req.url;
    const viewPath = path.join(__dirname, "views", (pathname as string) + ".html");
    fs.readFile(viewPath, "utf-8", (error, data) => {
        if (error) {
            if (error.code === "ENOENT") {
                const notFoundPath = path.join(__dirname, "views", "error404.html");
                fs.readFile(notFoundPath, "utf-8", (error, data) => {
                    if (error) {
                        res.writeHead(500, { "Content-Type": "text/plain" });
                        res.end("Server error");
                    } else {
                        res.writeHead(404, { "Content-Type": "text/html" });
                        res.end(data);
                    }
                });
            } else {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error interno del servidor.");
            }
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
});

server.listen(5000, () => {
    console.log(`Listening on port: 5000`);
});

fs.readFile("src/example.txt", "utf8", (error, data) => {
    if (error) {
        console.error("Error al leer el archivo:", error);
        return;
    }
    console.log("Contenido del archivo:", data);
});
