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

## Tenten format

Tenten object has the following structure.

```ts
type Tenten = {
  canvas: {
    width: number // the width of the canvas
    height: number // the height of the canvas
    color: string // the color of the canvas
  }
  boxes: Array<{
    x: number // the x of the box
    y: number // the y of the box
    width: number // the width of the box
    height: number // the height of the box
    color: string // the color of the box
  }>
  text: {
    body: string // text body
    size: number // text font size in px
  }
}
```

# License

MIT

[capsid]: https://capsid.js.org/
