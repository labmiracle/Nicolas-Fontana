import http from "node:http";

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ data: "Hello world!" }));
    } else if (req.url === "/miraclelab" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>MiracleLab</h1>");
    } else if (req.url === "/about" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About</h1>");
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>Not found</h1>");
    }
});

server.listen(5000, () => {
    console.log("Listening on port 5000");
});
