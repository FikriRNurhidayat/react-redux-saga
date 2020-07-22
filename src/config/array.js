Object.defineProperty(Array.prototype, 'last', {
  get() {
    return this[this.length - 1]
  }
})
