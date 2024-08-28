const http = require("http");
const fs = require("fs");


// Server creation
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        homePage(req, res);
    } else if (req.url === "/about") {
        aboutPage(req, res);
    } else if (req.url === "/contact") {
        contactPage(req, res);
    } else if (req.url === "/file-write") {
        fileWrite(req, res);
    } else {
        notFound(req, res);
    }
});

// Home
function homePage(req, res) {
    res.write("This is the Home Page");
    res.end();
}

// About
function aboutPage(req, res) {
    res.write("This is the About Page");
    res.end();
}

// Contact
function contactPage(req, res) {
    res.write("This is the Contact Page");
    res.end();
}

// File Create and Write
async function fileWrite(req, res) {
    try {
        await fs.writeFileSync("demo.txt", "hello world");
        res.write("File created successfully with content: 'hello world'");
    } catch (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error writing file: " + err.message);
    } finally {
        res.end();
    }
}

// 404 Not Found
function notFound(req, res) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 Not Found");
    res.end();
}


// Server
server.listen(5500, () => {
    console.log("Server is listening on port 5500...");
});
