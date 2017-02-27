if (!global.document) {
  global.document = require("jsdom-no-contextify").jsdom("<!doctype html><html><body></body></html>");
}

if (!global.window) {
  global.window = global.document.parentWindow;
}

if (!global.navigator) {
  global.navigator = global.window.navigator;
}
