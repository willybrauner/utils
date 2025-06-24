/**
 * Server & browser
 *
 */
export function isServer(): boolean {
  return typeof window === "undefined"
}
export function isSSR(): boolean {
  return isServer()
}
export function isBrowser(): boolean {
  return !isServer()
}
export function isClient(): boolean {
  return isBrowser()
}
export function serverOnly(callback: () => any) {
  return isServer() ? callback?.() : null
}
export function browserOnly(callback: () => any) {
  return isBrowser() ? callback?.() : null
}

/**
 * Mobile
 *
 */
export function isAndroid(): boolean {
  return browserOnly(() => /android/i.test(navigator.userAgent))
}
export function isWindowsPhone(): boolean {
  return browserOnly(() => /windows phone/i.test(navigator.userAgent))
}
export function isiPhone(): boolean {
  return browserOnly(() => /iPhone/i.test(navigator.userAgent))
}
export function isiPod(): boolean {
  return browserOnly(() => /iPod/i.test(navigator.userAgent))
}
export function isiPad(): boolean {
  return browserOnly(() => /iPad/i.test(navigator.userAgent))
}
export function isiOS(): boolean {
  return browserOnly(() => isiPhone() || isiPod() || isiPad())
}

/**
 * Devices
 *
 */
export function isHandheldDevice(): boolean {
  return browserOnly(() =>
    /(tablet|ipad|playbook|silk)|(android(?!.*mobi))|Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(
      navigator.userAgent,
    ),
  )
}
export function isTouchDevice() {
  return browserOnly(() => {
    // iOS devices
    if ("standalone" in navigator) return true

    const hasCoarse = window.matchMedia("(pointer: coarse)").matches
    if (hasCoarse) return true

    // prioritize mouse control
    const hasPointer = window.matchMedia("(pointer: fine)").matches
    if (hasPointer) return false

    // Otherwise, fall-back to older style mechanisms
    return "ontouchstart" in window || navigator.maxTouchPoints > 0
  })
}
export function isAppleDevice(): boolean {
  return isSafari() || isiOS()
}

/**
 * Browser
 *
 */
export function isChrome(): boolean {
  return browserOnly(
    () =>
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
  )
}
export function isFirefox(): boolean {
  return browserOnly(
    () => navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  )
}
export function isSafari(): boolean {
  return browserOnly(() => {
    const userAgent = window.navigator.userAgent
    return userAgent.includes("Safari") && !userAgent.includes("Chrome")
  })
}
