const fs = require('fs');
const path = require('path');

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

var promises = [];
config.categories.forEach(category => {
    var from = path.join(root_path, category);
    var to = path.join(content_path, 'resources', category);
    console.log(from, '->', to);
    promises.push(fs.promises.symlink(from, to, 'dir'));
});

Promise.all(promises).then((_) => {
    console.log('Symlinks created!')
}, (err) => {
    console.log('Failed to create content symlinks')
    console.error(err);
});