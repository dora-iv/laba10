import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export function getDirectorySize(directoryPath, callback) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            callback(err);
            return;
        }

        async.map(files, (file, cb) => {
            const filePath = path.join(directoryPath, file);
            fs.stat(filePath, (statErr, stats) => {
                if (statErr) {
                    cb(statErr, 0);
                    return;
                }
                if (stats.isFile()) {
                    cb(null, stats.size);
                } else {
                    cb(null, 0);
                }
            });
        }, (mapErr, sizes) => {
            if (mapErr) {
                callback(mapErr);
                return;
            }

            const totalSize = sizes.reduce((acc, size) => acc + size, 0);
            callback(null, totalSize);
        });
    });
}
// END
