// const index = require("../src/index.js");
import { subtableAarraySort } from "../src/index";

describe("testtest", () => {
  let subtable = [];
  beforeEach(() => {
    subtable = [
      { date: "2019-05-10" },
      { date: "2019-01-01" },
      { date: "2019-11-10" },
      { date: "2020-07-20" },
      { date: "2019-01-02" }
    ];
  });

  test("test1", () => {
    expect(subtableAarraySort(subtable).length).toBe(5);
  });
});

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});
