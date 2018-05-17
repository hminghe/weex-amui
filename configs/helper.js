// Helper functions
const path = require('path');
const config = require('./config')
const ROOT = path.resolve(__dirname, '..');

const root = (args) => {
  return path.join(ROOT, config.pageDir, args);
}
const rootNode = (args) => {
  return path.join(ROOT, args);
}

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  root,
  rootNode,
  resolve
}