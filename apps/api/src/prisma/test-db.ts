import { db } from './db';

async function testDatabase() {
    const result = await db.$queryRaw('SELECT 1');

    console.log('Database query successful:', result);
}

testDatabase().catch((error) => {
    console.error('Database query failed:', error);
    process.exit(1);
});