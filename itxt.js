const itxt = require('png-itxt');
const fs = require('fs');
console.log(itxt);
// var chunk = new itxt ({
var chunk = {
    keyword: 'openbadges',
    value: 'value',
    compression: 0,
    compressionMethod: 0,
    languageTag: '',
    translatedKeyword: '',
    text: {key:'value'}
// });
};

console.log(chunk);

fs.createReadStream('images/rookie-badge-issuer.png')
    .pipe(itxt.set(chunk))
    // .pipe(itxt.set(JSON.stringify(chunk)))
    .pipe(fs.createWriteStream('images/output.png'));

fs.createReadStream('images/rookie-badge-issuer.png')
    .pipe(itxt.get(function (err, data) {
        if (!err && data) {
            console.log(data.keyword, ':', data.value);
        }
        console.log('Nothing to see here');
    }));

fs.createReadStream('images/output.png')
    .pipe(itxt.get(function (err, data) {
        if (!err && data) {
            console.log(data.keyword, ':', data.value);
        }
        console.log('Okay we are done');
    }));
