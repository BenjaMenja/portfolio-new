/**
 * Splits a given array into chunks of size 'size'.
 * @param {*} arr An input array
 * @param {*} size The size of a chunk
 * @returns The split array
 */
export function chunk(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    )
}
