import axios from 'axios';

export default axios.create({
    baseURL: 'https://rawg-video-books-database.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': 'e080a4c241msh87e4d442ee828d2p1ce105jsn84db9f0223c0',
        'X-RapidAPI-Host': 'rawg-video-books-database.p.rapidapi.com'
    }
});