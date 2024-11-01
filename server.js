require("dotenv").config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const GENIUS_API_TOKEN = process.env.GENIUS_API_TOKEN;

const getArtistSongs = async (artistId) =>
{
    try {
        let songs = [];
        let page = 1;
        let hasMorePages = true;

        while (hasMorePages) {
            const response = await axios.get(`https://api.genius.com/artists/${artistId}/songs`,{
                headers: {
                    Authorization: `Bearer ${GENIUS_API_TOKEN}`,
                },
                params: {
                        page: page,
                } 
            });
            
            const songsData = response.data.response.songs;
            songs.push(...songsData);

            if (songsData === 0){
                hasMorePages = false;
            }
            page++;
        }
        return songs;
    } catch (error){
        console.error('Error fetching songs:', error.message);
        return [];
    }
};