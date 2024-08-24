import * as fs from "node:fs";
import { fileURLToPath } from 'url';
import path from 'path';

// Manually define __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
const storageDir = path.join(__dirname, '..', 'storage');

export const file_write = async (req, res) => {
    const filePath = path.join(storageDir, 'demo.txt');

    try {
        await fs.writeFileSync(filePath, 'Hello world');
        res.write('File created and written successfully in storage directory');
    } catch (err) {
        console.error('Error writing to file:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Error writing to file');
    } finally {
        res.end();
    }

}
