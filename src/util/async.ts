export const defer = (n: number) => new Promise((resolve, _) => { setTimeout(resolve, n) })
