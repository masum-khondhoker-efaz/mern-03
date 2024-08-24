import * as fs from "node:fs";

// Home
export const home = async (req, res) => {
    res.write('This is the Home Page');
    return res.end()
}
// About
export const about = async (req, res) => {
    res.write('This is the About Page');
    return res.end()
}

// Contact
export const contact = async (req, res) => {
    res.write('This is the Contact Page');
    return res.end()
}

// File-write

export const file_write = async (req, res) => {

    try {
        fs.writeFileSync("./app/storage/demo.txt", 'Hello world');
        res.write('File created and written successfully in storage directory');
    } catch (err) {
        console.error('Error writing to file:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Error writing to file');
    }
    return res.end();


}
