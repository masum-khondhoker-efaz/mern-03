import express from 'express';
const router = express.Router();

import * as portfolio from '../app/controllers/portfolio.js';

//Home
router.get("/", portfolio.home);

//About
router.get("/about", portfolio.about);

//Contact
router.get("/contact", portfolio.contact);

//File-write
router.post("/file-write", portfolio.file_write);



export default router;