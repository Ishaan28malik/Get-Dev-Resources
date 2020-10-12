const fs = require('fs');
const path = require('path');
var ncp = require('ncp').ncp;
ncp.limit = 16;

var root_path = path.join(
    __dirname, // scripts
    '..', // hugo
    '..', // root
);

var config_path = path.join(
    root_path,
    'content-config.json'
);

var content_path = path.join(
    __dirname, // scripts
    '..', // hugo
    'content'
)

var config = JSON.parse(fs.readFileSync(config_path));
fs.rmdirSync(path.join(content_path, 'resources'), { recursive: true });
fs.mkdirSync(path.join(content_path, 'resources'));

var promises = [];
config.categories.forEach(category => {
    var from = path.join(root_path, category);
    var to = path.join(content_path, 'resources', category);

    promises.push(ncp(from, to));
});

Promise.all(promises).then((_) => {
    console.log('Symlinks created!', _)
}, (err) => {
    console.log('Failed to create content symlinks')
    console.error(err);
});