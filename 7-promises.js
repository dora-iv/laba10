import fsp from 'fs/promises';
import fs from 'fs';
// BEGIN
export function reverse(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            const lines = data.trim().split('\n').reverse().join('\n');

            fs.writeFile(filepath, lines, 'utf8', (err) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve();
            });
        });
    });
}
// END