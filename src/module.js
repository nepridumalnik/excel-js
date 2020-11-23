console.log('module.js');

async function start() {
  return await Promise.resolve('async wirking');
}

start().then(console.log);
