const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const GENIUS_API_TOKEN = process.env.GENIUS_API_TOKEN;