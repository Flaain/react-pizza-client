export function debounce<A = unknown, R = void>(fn: (args: A) => R, ms = 350) {
    let timer: NodeJS.Timeout;
    return (args: A): Promise<R> =>
        new Promise((resolve) => {
            timer && clearTimeout(timer);
            timer = setTimeout(() => resolve(fn(args)), ms);
        });
}