export class Expense {
  #dollars;
  #cents;

  constructor(dollar, cents) {
    this.#dollars = dollar;
    this.#cents = cents;
  }

  add(other) {
    const resultedCents = this.#cents + other.#cents;
    const resultedDollars =
      this.#dollars + other.#dollars + Math.floor(resultedCents / 100);

    return new Expense(resultedDollars, resultedCents % 100);
  }

  isEqualTo(other) {
    if (!(other instanceof Expense)) return false;
    console.log(this.toString(), other.toString());

    return other.#cents === this.#cents && other.#dollars === this.#dollars;
  }

  toString() {
    return `${this.#dollars}.${this.#cents}`;
  }
}
