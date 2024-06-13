import { describe, expect, it } from "vitest"
import { interpolateColor } from "../../src"


describe("interpolateColor", () => {
  it("should interpolate hex color", () => {
    const color1 = "#000000"
    const color2 = "#ffffff"
    expect(interpolateColor(color1, color2, 0.5)).toBe("#808080")
    expect(interpolateColor(color1, color2, 0.75)).toBe("#bfbfbf")
    expect(interpolateColor(color1, color2, 0)).toBe(color1)
    expect(interpolateColor(color1, color2, 1)).toBe(color2)

    // doesn't work with  short hex
    // expect(interpolateColor("#000", "#fff", 1)).toBe("#ffffff")
  })

  it("should interpolate rgb color", () => {
    const color1 = "rgb(0, 0, 0)"
    const color2 = "rgb(255, 255, 255)"
    expect(interpolateColor(color1, color2, 0.5)).toBe("rgb(128, 128, 128)")
    expect(interpolateColor(color1, color2, 0.75)).toBe("rgb(191, 191, 191)")
    expect(interpolateColor(color1, color2, 0)).toBe(color1)
    expect(interpolateColor(color1, color2, 1)).toBe(color2)
  })


  it("should interpolate rgb and hex mixed", () => {
    const color1 = "rgb(0, 0, 0)"
    const color2 = "#ffffff"
    expect(interpolateColor(color1, color2, 0.5)).toBe("rgb(128, 128, 128)")
    expect(interpolateColor(color1, color2, 0.75)).toBe("rgb(191, 191, 191)")

    const color3 = "#000000"
    const color4 = "rgb(255, 255, 255)"
    expect(interpolateColor(color3, color4, 0.5)).toBe("#808080")
    expect(interpolateColor(color3, color4, 0.75)).toBe("#bfbfbf")
    expect(interpolateColor(color3, color4, 0.71)).toBe("#b5b5b5")
  })
})
