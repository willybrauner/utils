/**
 * Get a random item from an array
 * @param array
 */
export function randomItemFromArray <T = any>(array: T[]) :T | undefined {
 return array?.[Math.floor(Math.random() * array.length)]
}
