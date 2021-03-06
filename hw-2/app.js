const Finder = require('./lib_ee');

const MyEE = new Finder({
  path: './',
  searchDepth: 1,
  fileName: 'app.js'
});

MyEE.on('started', () => {
  console.log('Parse started');
});

MyEE.emit('init');

MyEE.on('find', ({ name, path }) => {
  console.log(`File ${name} found in path: ${path}`);
});

// progress эмитится каждые 3 секунд, если не было события find
MyEE.on('progress', ({files, dir}) => {
  console.log(`Progress: ${files} files, ${dir} dir`);
});

MyEE.once('complete', ({ scanned: { files, dirs }, found }) => {
  console.log(
    'complete',
    `${files} files`,
    `${dirs} dirs`,
    found
  );
});

MyEE.once('error', (err) => {
  console.error('aAAAAAAAAAAAAAAAAAA');
  console.error(err);
  process.exit(1);
});
