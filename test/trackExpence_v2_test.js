import { describe, it } from "jsr:@std/testing/bdd";
import { assertEquals, assert, assertFalse } from "jsr:@std/assert";
import { Expense } from "../src/trackExpenses_v2.js";

describe("testing is Equal method", () => {
  it("two instances of differance class should be false", () => {
    const expenses1 = new Expense(1, 0);
    const string = new String(2, 0);

    assertFalse(expenses1.isEqualTo(string));
  });

  it("two instance of same class and different value should be false", () => {
    const expense1 = new Expense(1, 0);
    const expense2 = new Expense(2, 0);
    const expense3 = new Expense(1, 2);

    assertFalse(expense1.isEqualTo(expense2));
    assertFalse(expense1.isEqualTo(expense3));
    assertFalse(expense2.isEqualTo(expense3));
  });

  it("identical intances should be equal", () => {
    const expense1 = new Expense(1, 40);
    const expense2 = new Expense(1, 40);

    assert(expense1.isEqualTo(expense2));
  });
});

describe("testing add method", () => {
  it("adding two Expense should give rsulting Expense", () => {
    const expense1 = new Expense(2, 40);
    const expense2 = new Expense(2, 60);

    assert(expense1.add(expense2).isEqualTo(new Expense(5, 0)));
  });
});
