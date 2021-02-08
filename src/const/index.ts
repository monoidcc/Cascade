export const devicePixelRatio = window.devicePixelRatio || 1
type PlatformType =
  | 'android'
  | 'ios'
  | 'web'
export const PLATFORM = process.env.PLATFORM as unknown as PlatformType
export const MAX_WAVE_COUNT = 40
