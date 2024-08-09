# react-font-icon
> Ali font icon for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-font-icon
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-font-icon/dist/style.css";

  // or use sass
  @import "~@jswork/react-font-icon/dist/style.scss";
  ```
2. setup / set defaults
```js
import ReactFontIcon from '@jswork/react-font-icon/main';

ReactFontIcon.defaultProps = {
  ...ReactFontIcon.defaultProps,
  prefix: 'ai7icon-',
};
```
3. import js
  ```js
  import ReactFontIcon from '@jswork/react-font-icon/src/main';
  import './setup.ts';
  import '@jswork/react-font-icon/dist/style.scss';

  function App() {
    return (
      <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
        <div className="badge badge-warning absolute right-0 top-0 m-4">
          Build Time: {BUILD_TIME}
        </div>
        <div className="text-center space-x-2">
          <ReactFontIcon name="a-custompersonbubble" size={20} />
          <ReactFontIcon name="a-custompersonbubble" size={24} />
          <ReactFontIcon name="a-custompersonbubble" size={28} />
          <ReactFontIcon name="a-custompersonbubble" size={50} />
        </div>
      </div>
    );
  }

  export default App;
  ```

## preview
- https://afeiship.github.io/react-font-icon/

## license
Code released under [the MIT license](https://github.com/afeiship/react-font-icon/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-font-icon
[version-url]: https://npmjs.org/package/@jswork/react-font-icon

[license-image]: https://img.shields.io/npm/l/@jswork/react-font-icon
[license-url]: https://github.com/afeiship/react-font-icon/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-font-icon
[size-url]: https://github.com/afeiship/react-font-icon/blob/master/dist/react-font-icon.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-font-icon
[download-url]: https://www.npmjs.com/package/@jswork/react-font-icon
