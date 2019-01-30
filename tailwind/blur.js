module.exports = function ({ blurPxs, variants = ['responsive'] }) {
  return function ({ addUtilities }) {
    const utilities = Object.keys(blurPxs).map((key) => ({
      [`.blur-${key}`]: {
        'filter': `blur(${blurPxs[key]}px)`
      }
    }))

    addUtilities(utilities, variants)
  }
}
