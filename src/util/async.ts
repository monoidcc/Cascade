export const defer = (n: number): Promise<void> =>
  new Promise((resolve, _) => {
    setTimeout(resolve, n);
  });
