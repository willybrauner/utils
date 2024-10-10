/**
 * Returns a string with all the classes passed as arguments
 * Useful to compose classes in jsx
 *
 * @returns string
 * @example
 *
 *    cls("a", "b") // "a b"
 *    cls(false && "a", "b") // "b"
 *    cls(undefined && "a", "b") // "b"
 *    cls(null && "a", "b") // "b"
 *
 * @param classes
 */
export function cls(...classes: (string | boolean | null | undefined)[]): string {
  return classes?.filter(Boolean).join(" ")
}
