import fs from 'fs';

// BEGIN
export function move(sourcePath, destinationPath, callback) {
    fs.readFile(sourcePath, (readErr, data) => {
        if (readErr) {
            callback(readErr);
            return;
        }

        fs.writeFile(destinationPath, data, (writeErr) => {
            if (writeErr) {
                callback(writeErr);
                return;
            }

            fs.unlink(sourcePath, (unlinkErr) => {
                if (unlinkErr) {
                    callback(unlinkErr);
                    return;
                }

                callback(null); // Все операции завершены успешно
            });
        });
    });
}

// END
