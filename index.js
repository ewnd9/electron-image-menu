'use strict';

module.exports = function inputMenu(ctx, next) {
  const menuTemplate = {
    label: 'Save image as..',
    click: function() {
      const saveFile = require('electron').remote.require('electron-save-file');
      saveFile(ctx.elm.src).catch(err => console.error(err.stack));
    }
  };

  if (ctx.elm.matches('img')) {
    ctx.menu.push(menuTemplate);
  }

  next();
};
