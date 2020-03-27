type StorageModule = {
  setItem: (k: string, v: string) => Promise<void>
  getItem: (k: string) => Promise<string>
}

export async function getStorage(): Promise<StorageModule> {
  if (process.env.NODE_ENV === 'development') {
    return await import('@lepont/async-storage/mock')
  } else {
    return await import('@lepont/async-storage')
  }
}
