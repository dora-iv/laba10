import fs from 'fs/promises';

// BEGIN
async function exchange(file1, file2) {
    try {
        const content1 = await fs.readFile(file1, 'utf-8');
        const content2 = await fs.readFile(file2, 'utf-8');

        await fs.writeFile(file1, content2);
        await fs.writeFile(file2, content1);

        console.log('Files exchanged successfully');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

export { exchange };
// END