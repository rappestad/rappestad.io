import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.33,
  scaleRatio: 1.67,
  headerFontFamily: [ "PT Mono", "sans-serif" ],
  bodyFontFamily: [ "Cutive Mono", "serif" ],
  googleFonts: [
    { name: "PT Mono", styles: [ '400' ] },
    { name: "Cutive Mono", styles: [ '400, 700' ] },
  ],
  headerGray: 20,
  bodyGray: 0,
  headerWeight: 400,
  blockMarginBottom: 1.05,
})

export default typography
