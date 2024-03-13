const fs = require('fs');

const sourcePath = `${__dirname}/input.txt`
const destinationPath = `${__dirname}/output.txt`

const inputStream = fs.createReadStream(sourcePath, { encoding: 'utf8' });
const outputStream = fs.createWriteStream(destinationPath, { encoding: 'utf8' });

inputStream.pipe(outputStream)

outputStream.on('finish', () => {
    console.log('File streaming completed.');
});

// Event listener for errors on the read stream
inputStream.on('error', (err) => {
    console.error('Input stream error:', err);
});
outputStream.on('error', (err) => {
    console.error('Output stream error:', err);
});
