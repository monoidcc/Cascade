# Cascade

> A generative art app for mobile

# Architecture

## Tools/Frameworks

Cascade uses the following tools and frameworks.

- react-native
- react-native-webview
- [capsid][capsid] (DOM programming)
- HTML5 Canvas
- [lepont][lepont] native bridge library
  - [@lepont/async-storage][@lepont/async-storage] for storgin persistent data
  - [@lepont/share][@lepont/share] for sharing image

# Spec

## Data format

Cascade has the following data types.

```ts
type Box = {
  x: number; // the x of the box
  y: number; // the y of the box
  width: number; // the width of the box
  height: number; // the height of the box
  color: string; // the color of the box
};

type TextLabel = {
  body: string; // text body
  size: number; // text font size in px
  fontFamily: string; // text font family
  color: string; // text color
  shadowColor: string; // color of text shadow
  shadowBlur: number; // blur width of text shadow
};

type Work = {
  backgroundColor: string; // the color of the canvas. Default is 'white'.
  boxes: Box[];
  text: TextLabel;
};
```

# License

MIT

[capsid]: https://capsid.js.org/
[lepont]: https://github.com/kt3k/lepont
[@lepont/async-storage]: https://github.com/kt3k/lepont-async-storage
[@lepont/share]: https://github.com/kt3k/lepont-share
