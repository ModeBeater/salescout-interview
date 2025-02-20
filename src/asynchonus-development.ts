// Write a function that accepts an array of URLs,
// makes parallel queries for each of them, and returns an
// an array of results in the order in which the queries are completed.

import { response } from "express";

// Example input data:
// const urls = ['https://jsonplaceholder.typicode.com/posts/1', 
// 'https://jsonplaceholder.typicode.com/posts/2'];

// Expected result:
// [
// { data: { ... }, status: 200 },
// { data: { ... }, status: 200 }
// ] 
type RequestsResult = {
    data: any,
    status: number
}

async function fetchAll(urls: string[]): Promise<RequestsResult[]> {
    //Your code goes here
    const requests = urls.map(url => fetch(url).then(async response => ({data: response.json, status: response.status})));
    return Promise.allSettled(requests).then(results => 
        results.filter(result => result.status == "fulfilled")
        .map(result => (result as PromiseFulfilledResult<RequestsResult>).value));
}

module.exports = { fetchAll };