// https://cp-algorithms.com/sequences/mex.html

class Mex {
  constructor(inputNumList) {
    this.frequency = new Map()
    this.missingNumbers = new Set()
    this.A = [...inputNumList]

    for (let i = 0; i <= inputNumList.length; i++) {
      this.missingNumbers.add(i)
    }

    for (let x of inputNumList) {
      this.frequency.set(x, (this.frequency.get(x) || 0) + 1)
      this.missingNumbers.delete(x)
    }
  }

  mex() {
    console.log('TCL=> ~ Mex ~ mex ~ this.missingNumbers:', this.missingNumbers.values())
    return this.missingNumbers.values().next().value
  }

  update(idx, newValue) {
    const oldValue = this.A[idx]
    this.frequency.set(oldValue, this.frequency.get(oldValue) - 1)
    if (this.frequency.get(oldValue) === 0) {
      this.missingNumbers.add(oldValue)
      this.frequency.delete(oldValue)
    }

    this.A[idx] = newValue
    this.frequency.set(newValue, (this.frequency.get(newValue) || 0) + 1)
    this.missingNumbers.delete(newValue)
  }
}

const mex = new Mex([1, 2, 0, 4, 5, 3])
console.log(mex.mex()) // 輸出 6
mex.update(2, 6)
console.log(mex.mex()) // 輸出 0
