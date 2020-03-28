type StorageModule = {
  setItem: <T>(k: string, v: T) => Promise<void>
  getItem: <T>(k: string) => Promise<T | null>
}

export async function getStorage(): Promise<StorageModule> {
  if (process.env.NODE_ENV === 'development') {
    return await import('@lepont/async-storage/mock')
  } else {
    return await import('@lepont/async-storage')
  }
}
