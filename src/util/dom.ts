export const qs = <T extends Element>(q: string): T =>
  document.querySelector(q) as any
export const byId = <T extends Element>(id: string): T =>
  document.getElementById(id) as any
export type Ctx = CanvasRenderingContext2D

export const onLoadImage = (src: string): Promise<HTMLImageElement> => {
  const img = new Image()
  return new Promise((resolve, _) => {
    img.onload = () => resolve(img)
    img.src = src
  })
}

export const create = (html: string): ChildNode => {
  const div = document.createElement('div')
  div.innerHTML = html
  if (div.children.length === 0) {
    throw new Error(`no valid element: ${html}`)
  }
  return div.children[0]
}
