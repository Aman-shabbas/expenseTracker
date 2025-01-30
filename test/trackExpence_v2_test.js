import { describe, it } from "jsr:@std/testing/bdd";
import { assertEquals, assert } from "jsr:@std/assert";
import { Expense } from "../src/trackExpenses_v2.js";

describe("testing add method", () => {
  it("adding two Expense should give rsulting Expense", () => {
    const expense1 = new Expense(2, 40);
    const expense2 = new Expense(2, 60);
    assert(expense1.add(expense2).isEqualTo(new Expense(5, 0)));
  });
});
