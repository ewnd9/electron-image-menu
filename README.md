# electron-image-menu

Context menu for `img` tags with the "Save image as" function in [`electron`](https://github.com/electron-userland/electron-prebuilt).

| Demo |
|:------:|
|![Demonstration](/demo.gif?raw=true)|

## Install

```
$ npm install electron-save-file --save
$ npm install electron-contextmenu-middleware --save
$ npm install electron-image-menu --save
```

## Usage

```js
const context = require('electron-contextmenu-middleware');
context.use(require('electron-image-menu'));
context.activate();
```

There is also [demo application](./demo) in the repository.

## Related

- [`electron-save-file`](https://github.com/ewnd9/electron-save-file) - api for this module
- [`electron-input-menu`](https://github.com/parro-it/electron-input-menu) - context menu for `input` tags
- [`electron-contextmenu-middleware`](https://github.com/parro-it/electron-contextmenu-middleware) - context menu middleware

## License

MIT © [ewnd9](http://ewnd9.com)
