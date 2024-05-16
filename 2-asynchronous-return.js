import fs, {writeFile} from 'fs';

// BEGIN
const write = (path, data, callback) => {
    fs.writeFile(path, data, 'utf8', (err) => {
        if (err) {
            callback(err);
        } else {
            callback(null, 'success');
        }
    });
};

export default write;
// END