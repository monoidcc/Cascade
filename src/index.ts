const main = () => {
  const ctx = (document.querySelector('#main-canvas') as HTMLCanvasElement).getContext('2d')!
  ctx.fillStyle = 'pink'
  ctx.fillRect(0, 0, 300, 150)
}

;(window as any).onload = () => {
  main()
}
