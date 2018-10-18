global.requestAnimationFrame = global.requestAnimationFrame || function requestAnimationFrame(cb) {
  return setTimeout(cb, 0);
};

global.cancelAnimationFrame = global.cancelAnimationFrame || function cancelAnimationFrame(id) {
  return clearTimeout(id);
};

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
