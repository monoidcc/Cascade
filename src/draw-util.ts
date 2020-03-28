import { Ctx } from './dom'
import { TextLabel } from './models'

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
