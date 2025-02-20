// Write a script that:
// 1. Connects to Redis.
// 2. Saves the keys with their values.
// 3. Reads and outputs values for a given key.

// Use redis library
import { createClient } from 'redis';
async function manageRedis(): Promise<void> {
    // Your code goes here
    const client = createClient();
    await client.set('myKey', 'Hello Redis!');
    const value = await client.get('myKey');
    console.log('Value from Redis:', value);
    await client.quit();
}

module.exports = { manageRedis };