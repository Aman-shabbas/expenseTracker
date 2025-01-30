export class Cash {
  #dollars;
  #cents;

  constructor(dollar, cents) {
    this.#dollars = dollar;
    this.#cents = cents;
  }

  static parseCash(cashString) {
    const [dollar, cents] = cashString.split(".");
    return new Cash(parseInt(dollar), parseInt(cents))  ;
  }

  add(other) {
    const resultedCents = this.#cents + other.#cents;
    const resultedDollars =
      this.#dollars + other.#dollars + Math.floor(resultedCents / 100);

    return new Cash(resultedDollars, resultedCents % 100);
  }

  isEqualTo(other) {
    if (!(other instanceof Cash)) return false;

    return other.#cents === this.#cents && other.#dollars === this.#dollars;
  }

  toString() {
    const centsInTwodigits = ("" + this.#cents).padStart(2, "0");
    return `${this.#dollars}.${centsInTwodigits}`;
  }
}
