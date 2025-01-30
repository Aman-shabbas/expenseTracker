import { describe, it } from "jsr:@std/testing/bdd";
import { assertEquals, assert, assertFalse } from "jsr:@std/assert";
import { Cash } from "../src/expense.js";

describe("testing parseCash", () => {
  it("should create instance of Cash class with parsed values", () => {
    const expense = Cash.parseCash("1.25");
    console.log(expense.toString());
    assert(expense.isEqualTo(new Cash(1, 25)));
  });
});

describe("testing is Equal method", () => {
  it("two instances of differance class should be false", () => {
    const expenses1 = new Cash(1, 0);
    const string = new String(2, 0);

    assertFalse(expenses1.isEqualTo(string));
  });

  it("two instance of same class and different value should be false", () => {
    const expense1 = new Cash(1, 0);
    const expense2 = new Cash(2, 0);
    const expense3 = new Cash(1, 2);

    assertFalse(expense1.isEqualTo(expense2));
    assertFalse(expense1.isEqualTo(expense3));
    assertFalse(expense2.isEqualTo(expense3));
  });

  it("identical intances should be equal", () => {
    const expense1 = new Cash(1, 40);
    const expense2 = new Cash(1, 40);

    assert(expense1.isEqualTo(expense2));
  });
});

describe("testing add method", () => {
  it("adding two Expense should give rsulting Expense", () => {
    const expense1 = new Cash(2, 10);
    const expense2 = new Cash(2, 30);

    assert(expense1.add(expense2).isEqualTo(new Cash(4, 40)));
  });

  it("total cents higher than 100 should rounded to dollar", () => {
    const expense1 = new Cash(2, 40);
    const expense2 = new Cash(2, 60);

    assert(expense1.add(expense2).isEqualTo(new Cash(5, 0)));
  });
});

describe("testing toString  ", () => {
  it("dollars and cents of an instance should be returned in dellar.cents fomat", () => {
    const expense = new Cash(1, 24);
    assertEquals(expense.toString(), "1.24");
  });

  it("cents should always be in two digits", () => {
    const expense = new Cash(1, 1);
    assertEquals(expense.toString(), "1.01");
  });
});
