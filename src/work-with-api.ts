// Write a function that makes a GET request to the JSONPlaceholder API and 
// returns posts that are longer than 100 characters.

import axios from "axios";

// API URL: https://jsonplaceholder.typicode.com/posts
// Use axios library
type APIResponseType = {
    id: number,
    userId: number
    title: string,
    body: string,
}

async function fetchLongPosts(): Promise<APIResponseType[]> {
    // Your code goes here
    const response = await axios.get<APIResponseType[]>('https://jsonplaceholder.typicode.com/posts');
    if(!Array.isArray(response.data)){
        throw new Error('is not array');
    }
    return response.data.filter(post => post.body.length > 100);
}

module.exports = { fetchLongPosts }