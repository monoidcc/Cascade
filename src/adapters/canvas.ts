import { Ctx } from '../util/dom'
import { TextLabel, Artwork, Rect } from '../domain/models'

export function drawText(
  ctx: Ctx,
  text: TextLabel,
  width: number,
  height: number
): void {
  ctx.save()

  ctx.font = text.font(height)
  ctx.fillStyle = text.color
  ctx.shadowColor = text.shadowColor
  ctx.shadowBlur = text.shadowBlur(height)

  ctx.shadowOffsetX = 0
  ctx.shadowOffsetY = 0
  ctx.textAlign = 'center'

  ctx.fillText(text.body, width / 2, height / 2 + (height * text.size) / 3)
  ctx.restore()
}

export function drawRects(
  ctx: Ctx,
  rects: Rect[],
  width: number,
  height: number
): void {
  rects.forEach(rect => {
    ctx.fillStyle = rect.color
    ctx.fillRect(
      rect.left() * width,
      rect.top() * height,
      rect.width * width,
      rect.height * height
    )
  })
}

export function drawArtwork(
  ctx: Ctx,
  artwork: Artwork,
  width: number,
  height: number
): void {
  ctx.fillStyle = artwork.backgroundColor
  ctx.fillRect(0, 0, width, height)
  drawRects(ctx, artwork.boxes, width, height)
  drawText(ctx, artwork.text, width, height)
}
