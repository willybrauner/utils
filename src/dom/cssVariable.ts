import { isClient } from "../envs/envs"

/**
 * Short to get the value of a CSS variable & force a string name range by type

 ex:

 export type TBreakpoint =
 | "--breakpoint-mobile"
 | "--breakpoint-tablet"
 | "--breakpoint-laptop"
 | "--breakpoint-bigLaptop"
 | "--breakpoint-desktop"

  ok:
    cssVariable<TBreakpoint>("--breakpoint-mobile")

 error:
    cssVariable<TBreakpoint>("--breakpoint-mobile-2")


 *
 * @param name
 * @param target
 */
export const cssVariable = <T extends string>(name: T, target = document.documentElement): string =>
  isClient() &&
  getComputedStyle(target).getPropertyValue(name)
