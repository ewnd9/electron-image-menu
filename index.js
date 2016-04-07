'use strict';

module.exports = function inputMenu(ctx, next) {
  let node = ctx.elm;

  const menuTemplate = [{
    label: 'Save image as..',
    click: function() {
      const saveFile = require('remote').require('electron-save-file');
      saveFile(ctx.elm.src).catch(err => console.error(err.stack));
    }
  }];

  while (node) {
    if (node.matches('img')) {
      [].push.apply(ctx.menu, menuTemplate);
      break;
    }

    node = node.parentElement;
  }

  next();
};
