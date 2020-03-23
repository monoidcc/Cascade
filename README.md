# Tententen WIP

> A simple generative picture app for mobile

# Architecture

## Tools/Frameworks

Tententen uses the following tools and frameworks.

- react-native
- react-native-webview
- [capsid][] (DOM programming)
- HTML5 Canvas
- Web Share API

# Spec

## Data format

Tententen has the following data types.

```ts
type Box = {
  x: number // the x of the box
  y: number // the y of the box
  width: number // the width of the box
  height: number // the height of the box
  color: string // the color of the box
}

type Work = {
  backgroundColor: string // the color of the canvas. Default is 'white'.
  boxes: Box[]
  text: {
    body: string // text body
    size: number // text font size in px
    fontFamily: string // text font family
    color: string // text color
    shadowColor: string // color of text shadow
    shadowBlur: number // blur width of text shadow
  }
}
```

# License

MIT

[capsid]: https://capsid.js.org/
