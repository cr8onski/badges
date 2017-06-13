console.log("Welcome to the Open Badge Validtor!");
var bv = require('openbadges-validator');

var input = require('../assertions/rookie-badge-award-try2.json');
console.log(input);
var cb = function (err, data) {
    if (err) {
        console.log(`Umm... You need some help.  Check these out:\n${err}\nAnd some additional info:\n${JSON.stringify(data)}`);
    } else {
        console.log(data);
    }
}
var version = '1.1.0';
var verificationType = input.verify.type || 'hosted';

bv(input, cb, version, verificationType);
